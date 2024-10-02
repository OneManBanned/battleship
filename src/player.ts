import Gameboard from "./gameboard.ts"
import { Point } from "../types/types.ts";

export default class Player {

    playerBoard: Gameboard;

    constructor() {
        this.playerBoard = new Gameboard;
    }

    fire(opponent: Player, coords: Point) {
        console.log(opponent.playerBoard)
        console.log(opponent.playerBoard.checkGrid(coords))
        if (opponent.playerBoard.checkGrid(coords)) {
            const shipKey = opponent.playerBoard.checkGrid(coords) 
            opponent.playerBoard.ships[shipKey].hit();
        }
    }

}
