import Ship from "../src/classes/ship"

describe("Ship class", () => {

    test("ship assigns first arg to key", () => {
        const ship = new Ship(1, 2)
        expect(ship.key).toBe(1)
    })

    test("ship assigns second arg to length", () => {
        const ship = new Ship(1, 2)
        expect(ship.length).toBe(2)
    })

    test("hit should decrease ship length by 1", () => {
        const ship = new Ship(1, 2)

        ship.hit()

        expect(ship.length).toBe(1)
    })
})
