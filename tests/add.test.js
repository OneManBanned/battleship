import add from "../src/add.ts";

test('add 3 + 3', () => {
    expect(add(3, 3)).toBe(6);
})
