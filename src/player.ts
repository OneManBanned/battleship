import Gameboard from "./gameboard.ts"
import { Point } from "../types/types.ts";

export default class Player {

    playerBoard: Gameboard;

    constructor() {
        this.playerBoard = new Gameboard;
    }

    fire(opponent: Player, coords: Point) {
        const { playerBoard } = opponent
        const shipKey = playerBoard.checkGrid(coords)

      if (!isNaN(shipKey)) {
          const targetShip = playerBoard.ships[shipKey]

          targetShip.hit();
      }

    }

}
