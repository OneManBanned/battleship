import Battleship from "../src/battleships";
import Player from "../src/player";
jest.mock("../src/player")

describe("battleships", () => {

  test("should pass this canary test", () => {
    expect(true).toBeTruthy();
  });

  test("Battleships class should be defined", () => {
    const b = new Battleship()
    expect(b).toBeDefined();
  });

  test("Battleship should create two instances Player classes", () => {
    expect(Player).toHaveBeenCalledTimes(2)
  })

});
