const f = require('./ch04');
const {test, expect} = require('@jest/globals');

// eslint-disable-next-line no-extend-native
Array.prototype.average = function() {
  return this.reduce((x, y) => x + y, 0);
};

test('A', () => {
  expect(f.mySum).toBe(163);
});

const cache = [];
const fib = (n) => {
  if (cache[n] === undefined) {
    if (n == 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    } else {
      return fib(n - 2) + fib(n - 1);
    }
  }
  return cache[n];
};
