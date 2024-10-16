import Ship from "../src/ship.ts";
import { Point } from "../types/types.ts";

export default class Gameboard {
  ships: { [key: number]: Ship };
  board: undefined | number[][];

  constructor() {
    this.ships = Gameboard.createShips();
    this.board = Gameboard.createBoard();
  }

  placeShip(coords: Point, key: number) {

      console.log(this.ships[key])
    if (
      this.checkGrid(coords) === undefined &&
      this.checkEmptyAdjacent(coords)
    ) {
      this.board[coords.x][coords.y] = key;
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

  private checkEmptyAdjacent(coords: Point) {
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
        if (this.checkGrid({ x: coords.x + x, y: coords.y + y })) {
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
      container[i] = new Ship(i, shipLengths[i]);
    }

    return container;
  }

  static createBoard () {
    const rows = 10;
    const columns = 10;

    return [...Array(rows)].map(() => Array(columns).fill(undefined));
  }
}
