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

})
