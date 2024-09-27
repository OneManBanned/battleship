import Ship from "../src/ship.ts"

export default class Gameboard {

    ships = {};
    board = [];


    constructor() {
        Gameboard.createShips(this.ships)
        this.board = Gameboard.createBoard()

    }

    static createShips(shipsContainer) {

    const totalShips = 8;

    for (let i = 0; i < totalShips; i++) {
            shipsContainer[i] = new Ship()
    }

    }

    static createBoard() {

        const rows = 10;
        const columns = 10;

         return [...Array(rows)].map(() => Array(columns).fill(undefined))
    }


}
