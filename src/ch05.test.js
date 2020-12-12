const {test, expect} = require('@jest/globals');

const reverseString = (str) => {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
};

test('A', () => {
  expect(reverseString('abc')).toBe('cba');
});

const reverseString2 = (str) => str.split('').reduceRight((x, y) => x + y, '');

test('B', () => {
  expect(reverseString2('abc')).toBe('cba');
});

Array.prototype.average = function() {
  return this.reduce((x, y) => x + y, 0) / this.length;
};

const markers = [
  {name: 'AR', lat: -34.6, lon: -58.4},
  {name: 'BO', lat: -16.5, lon: -68.1},
  {name: 'BR', lat: -15.8, lon: -47.9},
];

const averagelat = markers.map((x) => x.lat);

test('C', () => {
  expect(averagelat[0]).toBe(-34.6);
});

// eslint-disable-next-line max-len
const range = (start, stop) => new Array(stop - start).fill(0).map((_v, i) => start + i);
const from2to6 = range(2, 7);

test('D', () => {
  expect(from2to6).toEqual([2, 3, 4, 5, 6]);
});

const a = [[1, 2], [3, 4, [5, 6, 7]], 8];

test('R', () => {
  expect(a.flat()).toEqual([1, 2, 3, 4, [5, 6, 7], 8]);
});

test('T', () => {
  expect(a.flat(Infinity)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

const apiAnswer = [
  {
    country: 'AR',
    name: 'Arzentine',
    states: [{
      state: 'BBB',
      name: 'benos',
      cities: [{city: 1, name: 'lincoin'}],
    }],
  },
  {
    country: 'QW',
    name: 'hogehoge',
    states: [{
      state: 'AAA',
      name: 'qwety',
      cities: [{city: 2, name: 'fufufu'}],
    }],
  },
];

const b = apiAnswer
    .map((x) => x.states)
    .flat()
    .map((y) => y.cities)
    .flat();


test('H', () => {
  expect(b).toEqual([{city: 1, name: 'lincoin'}, {city: 2, name: 'fufufu'}]);
},
);

