import Gameboard from "../src/gameboard"
import Ship from "../src/ship"
jest.mock("../src/ship")

describe("Gameboard class", () => {
    let g: any;

    beforeEach(() => {
        g = new Gameboard
    })
    
    test("Gameboard should create 8 instances of Ship", () => {
        expect(Ship).toHaveBeenCalledTimes(8)
    })

    test("Gameboard.board rows should have a length of 10", () => {
        expect(g.board).toHaveLength(10)
    })

    test("Gameboard.board columns should have a length of 10", () => {
        expect(g.board[0]).toHaveLength(10)
    })

    test("emptyGrid should return true if given coordinates value is undefined", () => {
        expect(g.emptyGrid({ x: 0, y: 0 })).toBe(true);
    })

    test("emptyGrid should return false if given coordinates value is not undefined", () => {
        g.placeShip({ x: 0, y: 0 }, 1)
        expect(g.emptyGrid({ x: 0, y: 0 })).toBe(false);
    })

    test("placeShip should add the given key to given coordinates", () => {
        g.placeShip({ x: 0, y: 0}, 1);
        expect(g.getCoordinates({ x: 0, y: 0 })).toBe(1);
    })

    test("placeShip should return false if given coordinates already contain a key", () => {
        g.placeShip({ x: 9, y: 9 }, 1)
        expect(g.placeShip({ x: 9, y: 9 }, 1)).toBe(false);
    })

    test("checkAdjacent should return true if all adjacent grids are empty", () => {
        expect(g.checkAdjacent({ x: 3, y: 3 })).toBe(true);
    })

    test("checkAdjacent should return false if an adjacent grid isn't empty", () => {
        g.placeShip({x: 4, y: 3}, 1)
        expect(g.checkAdjacent({ x: 3, y: 3 })).toBe(false);
    })

    test("checkAdjacent should return true if adjacent grids are empty or walls", () => {
        expect(g.checkAdjacent({ x: 9, y: 9 })).toBe(true);
    })

})
