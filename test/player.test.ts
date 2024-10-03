import Player from '../src/player'
import Gameboard from '../src/gameboard'
jest.mock("../src/player")

describe("Player class", () => {

    let p;

    beforeEach(() => {
        p = new Player()
    })

    test("Player class should create an instance of gameboard class", () => {
        expect(Gameboard).toHaveBeenCalled()
    })

    test.only("fire should call Gameboard.checkGrid", () => {
        const playerMock =  Player as jest.Mock
        p.fire(playerMock, {x: 0, y: 0})
        console.log(playerMock.mock)
        console.log(playerMock.mock.calls)
        console.log(playerMock.mock.contexts[0])
    })

})
