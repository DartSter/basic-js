const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (arr instanceof Array) {
    const array = [...arr];
    const keys = [
      "--discard-next",
      "--discard-prev",
      "--double-next",
      "--double-prev",
    ];
    const result = [];
    array.forEach((i, index) => {
      if (keys.every((key) => key !== i) && i) {
        result.push(i);
      }
      if (i === "--discard-next" && array[index + 1]) {
        array[index + 1] = undefined;
      }
      if (i === "--discard-prev" && array[index - 1]) {
        result.pop();
      }
      if (i === "--double-next") {
        array[index + 1] && result.push(array[index + 1]);
      }
      if (i === "--double-prev") {
        array[index - 2] !== "--discard-next" &&
          !!array[index - 1] &&
          result.push(array[index - 1]);
      }
    });
    return result;
  } else {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
}

module.exports = {
  transform,
};
