const { TestScheduler } = require('jest');
const f = require('./ch04');
const { test, expect } = require('@jest/globals');

Array.prototype.average = function () {
    return this.reduce((x, y) => x + y, 0)
}

test("A", () => {
    expect(f.mySum).toBe(163)
});

test("B", () => {
    expect([1,2,3].average()).toBe(2)
})