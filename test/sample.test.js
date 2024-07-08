import {Sample} from "../src/index.ts"

describe("Sample test suite", () => {
    test("Initial test", () => {
        expect(2).toEqual(2)
    });

    test("hello world output", () => {
        let s = new Sample
        expect(s.hello("Brendan")).toEqual("Hello Brendan")
    });
});
