const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((startValue, currentItem) => startValue + currentItem, 0);
};

const multiply = function (arr) {
  return arr.reduce((startValue, currentItem) => startValue * currentItem);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    for (let i = 2; i <= num; i++) {
      num = num * i;
    }
    return num;
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
