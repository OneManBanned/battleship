import Gameboard from "../src/gameboard";
import Player from "../src/player";
import Ship from "../src/ship";

describe("Gameboard class", () => {
  let g;

  beforeEach(() => {
    g = new Gameboard();
  });

  test.skip("Gameboard should create 10 instances of Ship", () => {
    expect(Ship).toHaveBeenCalledTimes(10);
  });

  test("Gameboard.board rows should have a length of 10", () => {
    expect(g.board).toHaveLength(10);
  });

  test("Gameboard.board columns should have a length of 10", () => {
    expect(g.board[0]).toHaveLength(10);
  });

  test("checkGrid should return undefined if given coordinates grid is empty", () => {
    expect(g.checkGrid({ x: 0, y: 0 })).toBeUndefined;
  });

  test("checkGrid should return Ship key if given coordinates grid is a ship", () => {
    g.placeShip({ x: 0, y: 0 }, 1);
    expect(g.checkGrid({ x: 0, y: 0 })).toBe(1);
  });

  test("placeShip should add the given key to given coordinates", () => {
    g.placeShip({ x: 0, y: 0 }, 1);
    expect(g.checkGrid({ x: 0, y: 0 })).toBe(1);
  });

  test("placeShip should add ship key to as many grids as the ships length", () => {

      jest.spyOn(Gameboard, "createShips").mockImplementation(() => {
          const container = {}

          container[0] = new Ship(0, 2)
          return container
      })
      const gameboardMock = new Gameboard

      gameboardMock.placeShip({x: 0, y: 0}, 0)

    expect(gameboardMock.checkGrid({ x: 0, y: 0 })).toBe(0);
    expect(gameboardMock.checkGrid({ x: 0, y: 1 })).toBe(0);

  });

  test("checkEmptyAdjacent should return true if all adjacent grids are empty", () => {
    expect(g.checkEmptyAdjacent({ x: 3, y: 3 }, 0)).toBe(true);
  });

  test("checkEmptyAdjacent should return false if an adjacent grid isn't empty", () => {
    g.placeShip({ x: 4, y: 3 }, 0);
    expect(g.checkEmptyAdjacent({ x: 3, y: 3 }, 1)).toBe(false);
  });

  test("checkEmptyAdjacent should return true if adjacent grids are empty or walls", () => {
    expect(g.checkEmptyAdjacent({ x: 9, y: 9 }, 0)).toBe(true);
  });

  test("shipsSunk should return true if all ships have been sunk", () => {
    jest.spyOn(Gameboard, "createShips").mockImplementation(() => {
      const container = {};
      const totalShips = 10;

      for (let i = 0; i < totalShips; i++) {
        container[i] = { isSunk: true };
      }

      return container;
    });

    const p = new Player();

    expect(p.playerBoard.shipsSunk()).toBe(true);
  });

  test("shipsSunk should return false if any ship is still afloat", () => {
    jest.spyOn(Gameboard, "createShips").mockImplementation(() => {
      const container = {};
      const totalShips = 10;

      for (let i = 0; i < totalShips; i++) {
        container[i] = { isSunk: false };
      }

      return container;
    });

    const p = new Player();

    expect(p.playerBoard.shipsSunk()).toBe(false);
  });
});
