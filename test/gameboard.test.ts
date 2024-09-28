import Gameboard from "../src/gameboard"
import Ship from "../src/ship"
jest.mock("../src/ship")

describe("Gameboard class", () => {
    let g;
    
    test("Gameboard should create 8 instances of Ship", () => {
        g = new Gameboard
        expect(Ship).toHaveBeenCalledTimes(8)
    })

    test("Gameboard.board rows should have a length of 10", () => {
        expect(g.board).toHaveLength(10)
    })

    test("Gameboard.board columns should have a length of 10", () => {
        expect(g.board[0]).toHaveLength(10)
    })

    test("emptyGrid should return true if given coordinates value is undefined", () => {
        expect(g.emptyGrid({ x: 0, y: 0 })).toBeTruthy();
    })

    test("placeShip should add the given key to given coordinates", () => {
        g.placeShip({ x: 0, y: 0}, 1);
        expect(g.getCoordinates({ x: 0, y: 0 })).toBe(1);
    })

    test("placeShip should return false if given coordinates already contain a key", () => {
        expect(g.placeShip({ x: 0, y: 0 }, 1)).toBeFalsy();
    })

    test.skip("checkAdjacent should return true if all adjacent grids are undefined | null", () => {
        expect(g.checkAdjacent({ X: 0, y: 1 })).toBeTruthy();
    })

})
