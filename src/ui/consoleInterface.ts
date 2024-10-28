import Gameboard from "../classes/gameboard";
import Player from "../classes/player";

export default function ConsoleUI(player1: Player, player2: Player) {

    function printBoard(player: Player) {
        for (let row = 0; row <= 9; row++) {
            let r = "";
            for (let col = 0; col <= 9; col++) {
                const shipKey = player.playerBoard.board[row][col];
                const alreadyHit = player.shotsFired[row][col]

                !alreadyHit ? (r += "-") : shipKey === undefined ? (r += "x") : (r += "s");
            }
            console.log(r);
        }
    }

    function printVisibleBoard(player: Player) {
        for (let row = 0; row <= 9; row++) {
            let r = "";
            for (let col = 0; col <= 9; col++) {
                const shipKey = player.playerBoard.board[row][col];

                shipKey === undefined ? (r += "-") : (r += shipKey);
            }
            console.log(r);
        }
    }

    function printBoards() {
        printBoard(player1);
        console.log("\n");
        printBoard(player2);
    }

    function printWinner() {
        printBoards()
        const winner = player1.playerBoard.shipsSunk ? "player 1" : "player 2"
        console.log("\n", `Game Over - ${winner} won`);
    }

    return { printBoards, printWinner, printVisibleBoard }
}
