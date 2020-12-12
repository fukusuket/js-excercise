const {test, expect} = require('@jest/globals');
const g = require('./ch02');

const a = () => console.log('hogehoge');
test('B', () => {
  const b = g.once(a);
  expect(b());
  expect(b());
});

test('C', () => {
  const c = g.myCounter;
  expect(c()).toBe(78);
  expect(c()).toBe(79);
});

test('C', () => {
  const c = g.altSum3;
  const d = c(1)(2);
  expect(d(3)).toBe(6);
  expect(d(4)).toBe(7);
});
