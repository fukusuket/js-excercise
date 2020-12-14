const {test, expect} = require('@jest/globals');

test('A', () => {
  let message = 'hello';
  message = 12345;
  expect(message).toBe(12345);
});

test('B', () => {
  let n = 123;
  n = 12.345;
  expect(n).toBe(12.345);
});

test('C', () => {
  const s = 'hello';
  const p = `${s}aa`;
  expect(p).toBe('helloaa');
  expect(`${1+2}`).toBe('3');
});

test('D', () => {
  const s = 'hello';
  const p = `${s}aa`;
  expect(p).toBe('helloaa');
  expect(`${1+2}`).toBe('3');
});

