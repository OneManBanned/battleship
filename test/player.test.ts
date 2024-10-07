import Player from "../src/player";
import Gameboard from "../src/gameboard";

describe("Player class", () => {
  let p;

  beforeEach(() => {
    p = new Player();
  });

  test("Player class should instance should have playerBoard defined", () => {
      expect(p.playerBoard).toBeDefined();
  })

  test("fire should call opponent.playerBoard.checkGrid", () => {
    const opponent = new Player();
    const points = { x: 0, y: 0 };
    jest.spyOn(opponent.playerBoard, "checkGrid");

    p.fire(opponent, points);

    expect(opponent.playerBoard.checkGrid).toHaveBeenCalled();
  });

  test("fire should call opponent.playerBoard.checkGrid with given Points", () => {
    const opponent = new Player();
    const points = { x: 0, y: 0 };
    jest.spyOn(opponent.playerBoard, "checkGrid");

    p.fire(opponent, points);

    expect(opponent.playerBoard.checkGrid).toHaveBeenCalledWith(points);
  });

  test("fire should decrease length of ship, if coordinates hold a ship", () => {
      const opponent = new Player()
      const points = {x: 0, y: 0}
      opponent.playerBoard.placeShip({x: 0, y: 0}, 0)

      p.fire(opponent, points)

     expect(opponent.playerBoard.ships[0].length).toBe(0) 
  });

  test.skip("fire should return undefined if grid coordinates are empty", () => {
      const opponent = new Player()
      const points = {x: 0, y: 0}

      expect(p.fire(opponent, points)).toHaveReturnedWith(undefined)
  });
});
