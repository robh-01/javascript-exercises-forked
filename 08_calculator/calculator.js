const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, element) => total + element, 0);
};

const multiply = function (arr) {
  return arr.reduce((product, element) => product * element, 1);
};

const power = function (base, power) {
  let product = 1;
  for (let i = 0; i < power; i++) {
    product *= base;
  }
  return product;
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  }
  else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
