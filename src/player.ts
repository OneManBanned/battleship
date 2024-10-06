import Gameboard from "./gameboard.ts"
import { Point } from "../types/types.ts";

export default class Player {

    playerBoard: Gameboard;

    constructor() {
        this.playerBoard = new Gameboard;
    }

    fire(opponent: Player, coords: Point) {
        const board = opponent.playerBoard
        const shipKey = board.checkGrid(coords)

      if (!isNaN(shipKey)) {
          const targetShip = board.ships[shipKey]

          targetShip.hit();
      }

    }

}
