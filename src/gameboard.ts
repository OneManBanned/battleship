import Ship from "../src/ship.ts";
import { Point } from "../types/types.ts"

export default class Gameboard {

  ships: { [key: number]: Ship };
  board: undefined | number[][];

  constructor() {
    this.ships = Gameboard.createShips();
    this.board = Gameboard.createBoard();
  }

  emptyGrid(coords: Point) {

     return  isNaN(this.board[coords.x][coords.y]) ? true : false;
  }

  getCoordinates(coords: Point) {
      return this.board[coords.x][coords.y]
  }

  checkAdjacent(coords: Point) {
    const dir = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (let i = 0; i < dir.length; i++) {
      let [x, y] = dir[i];
      console.log(this.emptyGrid({x: coords.x + x, y: coords.y + y}))
      if (this.emptyGrid({x: coords.x + x, y: coords.y + y})) 
          return true  
      } 
  }


  placeShip(coords: Point, key: number) {
    if (this.emptyGrid(coords)) {
      this.board[coords.x][coords.y] = key;
    } else {
      return false;
    }
  }

  static createShips() {
    const container = {};
    const totalShips = 8;

    for (let i = 0; i < totalShips; i++) {
      container[i + 1] = new Ship();
    }

    return container;
  }

  static createBoard() {
    const rows = 10;
    const columns = 10;

    return [...Array(rows)].map(() => Array(columns).fill(undefined));
  }
}
