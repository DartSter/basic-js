const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const sumOfDigit = (n) => {
    return n
      .toString()
      .split("")
      .reduce((acc, i) => (acc += +i), 0);
  };
  let result = sumOfDigit(n);
  while (result.toString().length > 1) {
    result = sumOfDigit(result);
    
  }
  return result
}

module.exports = {
  getSumOfDigits
};
