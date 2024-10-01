import Ship from "../src/ship.ts";
import { Point } from "../types/types.ts";


export default class Gameboard {
  ships: { [key: number]: Ship };
  board: undefined | number[][];

  constructor() {
    this.ships = Gameboard.createShips();
    this.board = Gameboard.createBoard();
  }

  emptyGrid(coords: Point) {
    return this.board[coords.x][coords.y] === undefined ? true : false;
  }

  getCoordinates(coords: Point) {
    return this.board[coords.x][coords.y];
  }

  checkAdjacent(coords: Point) {
    const dir = [ 
        [-1, 0], [1, 0],
        [0, -1], [0, 1],
    ];

    for (let i = 0; i < dir.length; i++) {
      let [x, y] = dir[i];

      if (
        coords.x + x >= 0 && coords.x + x <= 9 &&
        coords.y + y >= 0 && coords.y + y <= 9
      ) {
        if (!this.emptyGrid({ x: coords.x + x, y: coords.y + y })) {
          return false;
        }
      }
    }

    return true;
  }

  placeShip(coords: Point, key: number) {

    if (this.emptyGrid(coords) && this.checkAdjacent(coords)) {

      this.board[coords.x][coords.y] = key;

    } else {

      return false;

    }

  }

  static createShips() {
    const container = {};
    const totalShips = 10;
    const shipLengths = [ 1, 1, 1, 1, 2, 2, 2, 3, 3, 4 ]

    for (let i = 0; i < totalShips; i++) {
      container[i] = new Ship(shipLengths[i], i);
    }

    return container;
  }

  static createBoard() {
    const rows = 10;
    const columns = 10;

    return [...Array(rows)].map(() => Array(columns).fill(undefined));
  }
}
