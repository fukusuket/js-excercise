const { test, expect } = require('@jest/globals');
const f = require('./ch01');

test("A", () => {
    expect(f.fact2(5)).toBe(120)
});

test("B", () => {
    expect(f.fact3(5)).toBe(120)
});

test("C", () => {
    const x = [1, 2, 3];
    expect(f.sum3(...x)).toBe(6)
})

test("D", () => {
    const maxArray = arr => Math.max(...arr);
    const maxA = maxArray([1,2,5,9,8])
    expect(maxA).toBe(9)
;})