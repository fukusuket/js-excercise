const myArray = [22, 9, 60, 12, 4, 56];
const sumAndLog = (x, y) => {
  return x + y;
};
const mySum = myArray.reduce(sumAndLog, 0);

module.exports = {mySum};
