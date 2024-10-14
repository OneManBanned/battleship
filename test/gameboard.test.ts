import Gameboard from "../src/gameboard"
import Ship from "../src/ship"
jest.mock("../src/ship")

describe("Gameboard class", () => {

    let g;

    beforeEach(() => {
        g = new Gameboard()
    })
    
    test("Gameboard should create 10 instances of Ship", () => {
        expect(Ship).toHaveBeenCalledTimes(10)
    })

    test("Gameboard.board rows should have a length of 10", () => {
        expect(g.board).toHaveLength(10)
    })

    test("Gameboard.board columns should have a length of 10", () => {
        expect(g.board[0]).toHaveLength(10)
    })

    test("checkGrid should return undefined if given coordinates grid is empty", () => {
        expect(g.checkGrid({ x: 0, y: 0 })).toBeUndefined;
    })

    test("checkGrid should return Ship key if given coordinates grid is a ship", () => {
        g.placeShip({ x: 0, y: 0 }, 1)
        expect(g.checkGrid({ x: 0, y: 0 })).toBe(1);
    })

    test("placeShip should add the given key to given coordinates", () => {
        g.placeShip({ x: 0, y: 0}, 1);
        expect(g.checkGrid({ x: 0, y: 0 })).toBe(1);
    })

    test("placeShip should return false if given coordinates already contain a key", () => {
        g.placeShip({ x: 9, y: 9 }, 1)
        expect(g.placeShip({ x: 9, y: 9 }, 1)).toBe(false);
    })

    test("checkEmptyAdjacent should return true if all adjacent grids are empty", () => {
        expect(g.checkEmptyAdjacent({ x: 3, y: 3 })).toBe(true);
    })

    test("checkEmptyAdjacent should return false if an adjacent grid isn't empty", () => {
        g.placeShip({x: 4, y: 3}, 1)
        expect(g.checkEmptyAdjacent({ x: 3, y: 3 })).toBe(false);
    })

    test("checkEmptyAdjacent should return true if adjacent grids are empty or walls", () => {
        expect(g.checkEmptyAdjacent({ x: 9, y: 9 })).toBe(true);
    })

    test("shipsSunk should return true if all ships have been sunk", () => {
        const gameboardMock = jest.spyOn(Gameboard, "createShips").mockImplementation(() => {
        const container = {};
        const totalShips = 10;
        const shipLengths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (let i = 0; i < totalShips; i++) {
            container[i] = new Ship(i, shipLengths[i]);
        }

        return container;

        })

        console.log(gameboardMock)
    })

})
