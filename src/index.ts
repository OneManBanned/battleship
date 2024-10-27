import Player from "./classes/player";
import inputCoordinate from "./input/getInput";
import ConsoleUI from "./ui/consoleInterface";

const player1 = new Player() 
const player2 = new Player()
const ui =  ConsoleUI(player1, player2)

player1.playerBoard.defaultShipPlacement();
player2.playerBoard.defaultShipPlacement();

let alternateTurn = true

while (!player1.playerBoard.shipsSunk() && !player2.playerBoard.shipsSunk()) {

  const currentPlayer = alternateTurn ? player1 : player2
  const currentTarget = !alternateTurn ? player1 : player2

  const coordinates = { x: 0, y: 0 };

  ui.printBoards()

  coordinates.x = Number(inputCoordinate("x"));
  coordinates.y = Number(inputCoordinate("y"));

  currentPlayer.fire(currentTarget, coordinates);

  alternateTurn = !alternateTurn
}

ui.printWinner()
