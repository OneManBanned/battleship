import Gameboard from "./gameboard"
import { Point } from "../types/types";

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
