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
function encodeLine(str) {
  let strEncoded = ''
  if (str) {
    let sequence = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== sequence[0] && sequence.length > 0) {
      if (sequence.length > 1) {
        strEncoded += `${sequence.length}${sequence[0]}`
      } else {
        strEncoded += `${sequence[0]}`
      }
      sequence = []
    }
    sequence.push(str[i])
  }
  
  if (sequence.length > 1) {
    strEncoded += `${sequence.length}${sequence[0]}`
  } else {
    strEncoded += `${sequence[0]}`
  }
  }

  return strEncoded
}

module.exports = {
  encodeLine
};
