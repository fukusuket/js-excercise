const myArray = [22, 9, 60, 12, 4, 56];
const sumAndLog = (x, y) => {
  console.log(`${x}+${y}=${x + y}`);
  return x + y;
};
const mySum = myArray.reduce(sumAndLog, 0);

const average = (arr) => arr.reduce(sumAndLog, 0)/ arr.length;
console.log(average(myArray));

module.exports = {mySum};
