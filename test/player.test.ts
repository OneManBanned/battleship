import Player from "../src/classes/player";
import Gameboard from "../src/classes/gameboard";

describe("Player class", () => {
  let p;

  beforeEach(() => {
    p = new Player();
  });

  test("Player class should create instance of playerBoard", () => {
    expect(p.playerBoard).toEqual(new Gameboard());
  });

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
    const opponent = new Player();
    const points = { x: 0, y: 0 };
    opponent.playerBoard.placeShip({ x: 0, y: 0 }, 0);

    p.fire(opponent, points);

    expect(opponent.playerBoard.ships[0].length).toBe(0);
  });

  test("fire should return undefined if grid coordinates are empty", () => {
    const opponent = new Player();
    const points = { x: 0, y: 0 };

    expect(p.fire(opponent, points)).toBe(undefined);
  });

  test("fire should should sink ship if ship length is 0 after being hit", () => {
    const opponent = new Player();
    const points = { x: 0, y: 0 };
    opponent.playerBoard.placeShip({ x: 0, y: 0 }, 0);

    p.fire(opponent, points);

    expect(opponent.playerBoard.ships[0].isSunk).toBe(true);
  });

  test("fire should set given coordinates of shotsFired to true", () => {
    const playerDummy = new Player()
    p.fire(playerDummy, { x: 0, y: 0 });

    expect(p.shotsFired[0][0]).toBe(true);
  });
});
