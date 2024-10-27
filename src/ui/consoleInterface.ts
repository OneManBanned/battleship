import Gameboard from "../classes/gameboard";
import Player from "../classes/player";

export default function ConsoleUI(player1: Player, player2: Player) {

    function printBoard(gameboard: Gameboard) {
        for (let row = 0; row <= 9; row++) {
            let r = "";
            for (let col = 0; col <= 9; col++) {
                const shipKey = gameboard.board[row][col];
                let shipSunk: boolean;

                if (!isNaN(shipKey)) shipSunk = gameboard.ships[shipKey].isSunk;

                shipSunk || shipKey === undefined ? (r += "-") : (r += "s");
            }
            console.log(r);
        }
    }

    function printBoards() {
        printBoard(player1.playerBoard);
        console.log("\n");
        printBoard(player2.playerBoard);
    }

    function printWinner() {
        printBoards()
        const winner = player1.playerBoard.shipsSunk ? "player 1" : "player 2"
        console.log("\n", `Game Over - ${winner} won`);
    }

    return { printBoards, printWinner }
}
