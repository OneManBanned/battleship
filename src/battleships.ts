import Player from "./player";

export default class Battleship {
  player1: Player;
  player2: Player;

  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
  }

}
