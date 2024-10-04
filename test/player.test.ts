import Player from '../src/player'
import Gameboard from '../src/gameboard'
jest.mock("../src/player")
jest.mock("../src/gameboard")

describe("Player class", () => {

    let p;

    beforeEach(() => {
        p = new Player()
    })

    test("Player class should create an instance of gameboard class", () => {
        expect(Gameboard).toHaveBeenCalled()
    })

    test.only("fire should call Gameboard.checkGrid", () => {
        const opponent = new Player()
        p.fire(opponent, {x: 0, y: 0})
        console.log(jest.spyOn(p, "fire"))
        console.log(p.fire.mock.calls[0][1])
    })

})
