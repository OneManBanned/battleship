import pkg from "prompt-sync";
const prompt = pkg();

import Battleships from "./battleships";
import Player from "./player";

const battleship = new Battleships();
const player1 = battleship.player1;
const player2 = battleship.player2;

player1.playerBoard.defaultShipPlacement();
player2.playerBoard.defaultShipPlacement();

function printBoard(player: Player) {
  const self = player;

  for (let row = 0; row <= 9; row++) {
    let r = "";
    for (let col = 0; col <= 9; col++) {
      const shipKey = self.playerBoard.board[row][col];
      let shipSunk: boolean;

      if (!isNaN(shipKey)) shipSunk = self.playerBoard.ships[shipKey].isSunk;

      shipSunk || shipKey === undefined ? (r += "-") : (r += "s");
    }
    console.log(r);
  }
}

function inputCoordinate(axis: string): string {
  return prompt(`Enter ${axis} number you wish to fire on: `);
}

while (!player1.playerBoard.shipsSunk() && !player2.playerBoard.shipsSunk()) {
  const coordinates = { x: 0, y: 0 };

  printBoard(player1);

  console.log("\n");

  printBoard(player2);

  coordinates.x = Number(inputCoordinate("x").trim());
  coordinates.y = Number(inputCoordinate("y").trim());

  player1.fire(player2, coordinates);
}

console.log("\n", "GAME OVER");
player1.playerBoard.shipsSunk()
  ? console.log("Player 2 Won")
  : console.log("Player 1 Won");
