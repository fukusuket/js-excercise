const f = require('./ch04');
const { test, expect } = require('@jest/globals');

Array.prototype.average = function () {
    return this.reduce((x, y) => x + y, 0)
}

test("A", () => {
    expect(f.mySum).toBe(163)
});
