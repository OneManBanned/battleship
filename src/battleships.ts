import Player from "./player";

export default class Battleship {
    player1: Player;
    player2: Player;

    constructor() {
        this.player1 = new Player();
        this.player2 = new Player();

        this.player1.playerBoard.defaultShipPlacement()
        this.player2.playerBoard.defaultShipPlacement()
    }

    printBoard(player: Player) {

        const self = player

        for (let row = 0; row <= 9; row++) {
            let r = "";
            for (let col = 0; col <= 9; col++) {

                const shipKey = self.playerBoard.board[row][col];
                let shipSunk;

                if (!isNaN(shipKey)) shipSunk = self.playerBoard.ships[shipKey].isSunk;
                
                if (shipSunk || shipKey === undefined) {
                    r += "-";
                } else {
                    r += "s";
                }
            }
            console.log(r);
        }
    }
}
