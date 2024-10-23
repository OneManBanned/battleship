import inputValidator from "../src/inputValidation/inputValidation"

describe("InputValidator", () => {

    test("isWrongLength should return false for an empty string", () => {
        const { isWrongLength, isNumber } = inputValidator()

        expect(isWrongLength("")).toEqual(false)
    })

    test("isWrongLength should return true for a string with a space", () => {
        const { isWrongLength, isNumber } = inputValidator()

        expect(isWrongLength(" ")).toEqual(true)
    })

    test("isWrongLength should return false for a string with two spaces", () => {
        const { isWrongLength, isNumber } = inputValidator()

        expect(isWrongLength("  ")).toEqual(false)

    })
})
