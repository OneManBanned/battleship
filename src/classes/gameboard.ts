import Ship from "./ship";
import { Point } from "../../types/types";

export default class Gameboard {
    ships: { [key: number]: Ship };
    board: undefined | number[][];

    constructor() {
        this.ships = Gameboard.createShips();
        this.board = Gameboard.createBoard();
    }

    private placeShip(coords: Point, key: number) {
        const shipLength = this.ships[key].length - 1;
        let availableGrid = 0;
        let yAxis = coords.y;

        // Checks if grid and adjacent grids are empty
        if (
            this.checkGrid(coords) === undefined &&
            this.checkEmptyAdjacent(coords, key)
        ) {
            for (let i = 0; i < shipLength; ++i) {
                let nextCoords = { x: coords.x, y: yAxis };
                // checks each subsequent grid and adjacent is empty or contains same key. Up to length of ship.
                if (
                    this.checkGrid(nextCoords) === undefined &&
                    this.checkEmptyAdjacent(nextCoords, key)
                ) {
                    availableGrid++;
                    yAxis++;
                }
            }

            yAxis = coords.y;

            // checks all necessary grids are available before adding ship key to grids
            if (shipLength === availableGrid) {
                for (let i = 0; i <= shipLength; ++i) {
                    this.board[coords.x][yAxis] = key;
                    yAxis++;
                }
            }
        }
    }

    shipsSunk() {
        for (const ship in this.ships) {
            if (!this.ships[ship].isSunk) return false;
        }

        return true;
    }

    checkGrid(coords: Point) {
        return this.board[coords.x][coords.y];
    }

    private checkEmptyAdjacent(coords: Point, key: number) {
        const dir = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        for (let i = 0; i < dir.length; i++) {
            let [x, y] = dir[i];
            if (
                coords.x + x >= 0 &&
                coords.x + x <= 9 &&
                coords.y + y >= 0 &&
                coords.y + y <= 9
            ) {
                let gridKey = this.checkGrid({ x: coords.x + x, y: coords.y + y });

                if (gridKey !== key && gridKey !== undefined) {
                    return false;
                }
            }
        }

        return true;
    }

    defaultShipPlacement() {
        const defaultShipCoords = [
            { x: 1, y: 1 },
            { x: 1, y: 3 },
            { x: 1, y: 5 },
            { x: 1, y: 7 },
            { x: 3, y: 1 },
            { x: 3, y: 4 },
            { x: 3, y: 7 },
            { x: 5, y: 1 },
            { x: 5, y: 5 },
            { x: 7, y: 1 },
        ];
        defaultShipCoords.map((coords, index) => this.placeShip(coords, index));
    }

    static createShips() {
        const container = {};
        const totalShips = 10;
        const shipLengths = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

        for (let i = 0; i < totalShips; i++) {
            container[i] = new Ship(i, shipLengths[i]);
        }

        return container;
    }

    private static createBoard() {
        const rows = 10;
        const columns = 10;

        return [...Array(rows)].map(() => Array(columns).fill(undefined));
    }
}
