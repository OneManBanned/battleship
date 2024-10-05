import Player from '../src/player'
import Gameboard from '../src/gameboard'
jest.mock("../src/gameboard")

describe("Player class", () => {

    let p;

    beforeEach(() => {
        p = new Player()
    })

    test("Player class should create an instance of gameboard class", () => {
        expect(Gameboard).toHaveBeenCalled()
    })

    test("fire should call opponent.playerBoard.checkGrid", () => {
        const opponent = new Player
        const points = {x: 0, y: 0}

        jest.spyOn(opponent.playerBoard, "checkGrid")

        p.fire(opponent, points)

        expect(opponent.playerBoard.checkGrid).toHaveBeenCalled()
    })

})
