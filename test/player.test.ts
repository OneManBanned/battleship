import Player from '../src/player'
import Gameboard from '../src/gameboard'
jest.mock("../src/gameboard")

describe("Player class", () => {

    test("Player class should create an instance of gameboard class", () => {
        const p = new Player
        expect(Gameboard).toHaveBeenCalled()
    })

    test("fireAtTarget should reduce ship length by one if target is ship", () => {
          
    })

})
