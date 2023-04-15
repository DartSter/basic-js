const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(firstString, secondString) {

  let s1 = firstString;
  let s2 = secondString;
  
  let counter = 0;
  
  const arr = [...s2];
  
  arr.forEach((item) => {
  const i = new RegExp(item);
  if (s1.match(i)) {
    counter++;
    s1 = s1.replace(s1[s1.match(i).index], "");
  }
  })
    return counter
  }

module.exports = {
  getCommonCharacterCount
};
