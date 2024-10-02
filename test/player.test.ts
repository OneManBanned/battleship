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

    test("fire should reduce ship length by one if target is ship", () => {
         const opponent = new Player() 
         opponent.playerBoard.placeShip({x: 0, y: 0}, 0)
         p.fire(opponent, {x: 0, y: 0});
         expect(opponent.playerBoard.ships[0].length).toBe(0)
    })

})
