import Ship from "./ship";
import { Point } from "../../types/types";

export default class Gameboard {
    static defaultShipCoords: Point[] = [
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

    ships: { [key: number]: Ship };
    board: undefined | number[][];

    constructor() {
        this.ships = Gameboard.createShips();
        this.board = Gameboard.createBoard();
    }

    private placeShip(coords: Point, key: number, shipMoving?: boolean) {
        const { length, location } = this.ships[key];
        let availableGrids = 0;
        let yAxis = coords.y;

        // checks each subsequent grid and adjacent grid is empty or contains same key. Up to length of ship.
        for (let i = 0; i < length; ++i) {
            let nextCoords = { x: coords.x, y: yAxis + i };
            if (
                (this.checkGrid(nextCoords) === undefined ||
                    this.checkGrid(nextCoords) === key) &&
                this.checkEmptyAdjacent(nextCoords, key)
            ) {
                availableGrids++;
            }

            yAxis = coords.y;

            // checks all necessary grids are available before adding ship key to grids
            if (length === availableGrids) {
                if (shipMoving) {
                    // if ship is moving replace all grids it occupied with undefined
                    this.removeShip(location, length);
                    //  and update ship with new location
                    this.ships[key].location = coords;
                }

                // add ship key to new gird locations
                for (let i = 0; i < length; ++i) {
                    this.board[coords.x][yAxis + i] = key;
                }
            }
        }
    }

    moveShip(key: number, direction: string) {
        const { length, location } = this.ships[key];
        let { x, y }: Point = location;

        switch (direction) {
            case "right":
                y += length;
            break;
            case "left":
                y -= 1;
            break;
            case "up":
                x -= 1;
            break;
            case "down":
                x += 1;
            break;
            default:
                break;
        }

        if (x <= 9 && x >= 0 && y <= 9 && y >= 0) {
            if (direction === "right") y -= length - 1 ;
            this.placeShip({ x, y }, key, true);
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

    defaultShipPlacement() {
        Gameboard.defaultShipCoords.map((coords, index) =>
                                        this.placeShip(coords, index),
                                       );
    }

    private removeShip(location: Point, length: number) {
        for (let i = 0; i < length; i++) {
            this.board[location.x][location.y + i] = undefined;
        }
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

    static createShips() {
        const container = {};
        const totalShips = 10;
        const shipLengths = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

        for (let i = 0; i < totalShips; i++) {
            container[i] = new Ship(
                i,
                shipLengths[i],
                Gameboard.defaultShipCoords[i],
            );
        }

        return container;
    }

    private static createBoard() {
        const rows = 10;
        const columns = 10;

        return [...Array(rows)].map(() => Array(columns).fill(undefined));
    }
}
