import inputValidator from "../src/inputValidation/inputValidation"

describe("InputValidator", () => {
    const { validate } = inputValidator()

    test("validate should retrun true for '0'", () => {
        expect(validate("0")).toEqual(true)
    })

    test("validate should return false for an empty string", () => {

        expect(validate("")).toEqual(false)
    })

    test("validate should return false for a string with a space", () => {
        expect(validate(" ")).toEqual(false)
    })

    test("validate should return false for a string with two spaces", () => {
        expect(validate("  ")).toEqual(false)
    })
})
