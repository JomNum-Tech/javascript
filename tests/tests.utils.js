const { add, subtract } = require("../src/utils");

test("adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers correctly", () => {
    expect(subtract(5, 2)).toBe(3);
});

