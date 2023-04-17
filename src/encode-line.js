const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(string) {
  let str = string;
  Array.from(new Set(str.split(""))).forEach((i) => {
    let strToFing = new RegExp(`${i}+`, "g");

    str = str.replace(strToFing, (item) => `${item.length>1?item.length:''}${i}`);
  });
  return str;
}

module.exports = {
  encodeLine
};
