const fact2 = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * fact2(n - 1);
  }
};

const fact3 = (n) => (n === 0 ? 1 : n * fact3(n-1));

const sum3 = (a, b, c) => a + b + c;

module.exports = {fact2, fact3, sum3};
