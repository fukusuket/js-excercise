const {test, expect} = require('@jest/globals');
const sum = require('./app');

test('A', () => {
  expect(sum(1, 2)).toBe(3);
});

test('B', () => {
  expect(2 + 2).toBe(4);
});

test('C', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
});

test('plus', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
});

test('m', () => {
  expect('team').not.toMatch(/I/);
});

test('m2', () => {
  expect('christoph').toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('l', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});

test('k', () => {
  expect(() => {
    throw new Error('');
  }).toThrow();
});
