const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const arrayFromN = n.toString().split('')
  const newArray = arrayFromN.map((item, index, array) => {
    const number = array.join('').replace(array[index], '')
    return number
  })
  return +newArray.sort((a,b)=>b-a)[0]
}

module.exports = {
  deleteDigit
};
