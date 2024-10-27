import Gameboard from "./gameboard"
import { Point } from "../../types/types";

export default class Player {

    playerBoard: Gameboard;
    shotsFired: undefined | boolean[][];

    constructor() {
        this.playerBoard = new Gameboard;
        this.shotsFired = Player.createGrid()
    }

    fire(opponent: Player, coords: Point) {
        const { playerBoard } = opponent
        const shipKey = playerBoard.checkGrid(coords)
        const previouslyFiredAt = this.shotsFired[coords.x][coords.y]

      if (!isNaN(shipKey) && !previouslyFiredAt) {
          const targetShip = playerBoard.ships[shipKey]
          targetShip.hit();
      }

      this.firedUpon(coords)
    }

    private firedUpon(coords: Point) {
       this.shotsFired[coords.x][coords.y] = true;
    } 

    private static createGrid() {
        const rows = 10;
        const columns = 10;

        return [...Array(rows)].map(() => Array(columns).fill(false));
    }

}
