const { TestScheduler } = require("jest");
const { test, expect } = require('@jest/globals');
const g = require('./ch02');

const a = () => console.log("hogehoge")
test("B", () => {
    const b = g.once(a)
    expect(b())
    expect(b())
});