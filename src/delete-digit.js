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
function deleteDigit(n) {
  const givenNumArr = String(n).split('')
  const numVariants = []
  for (let i = 0; i < givenNumArr.length; i++) {
    const foundNum = [...givenNumArr.slice(0, i), ...givenNumArr.slice(i + 1)]
    numVariants.push(foundNum.join(''))
  }
  return Number(numVariants.sort((a, b) => b - a)[0])
}

module.exports = {
  deleteDigit
};
