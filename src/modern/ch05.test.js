/* eslint-disable require-jsdoc */
const {test, expect} = require('@jest/globals');

function pow(x, n) {
  return (n == 1) ? x: x * pow(x, n - 1);
}

test('A', () => {
  expect(pow(2, 3)).toBe(8);
});

const company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600}],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
    internals: [{name: 'Jack', salary: 1300}],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, curr) => prev + curr.salary, 0);
  } else {
    let sum = 0;
    for (const subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}

test('B', () => {
  expect(sumSalaries(company)).toBe(7700);
});

