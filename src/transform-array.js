const { NotImplementedError } = require('../extensions/index.js');

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
  const nextKeywords = ['--double-next', '--discard-next']
  const prevKeywords = ['--double-prev', '--discard-prev']
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }
  if (arr.length === 0) {
    return arr
  }
  if (arr.every(el => ![...prevKeywords, ...nextKeywords].includes(el))) {
    return arr
  }
  
  if (prevKeywords.includes(arr[0])) {
    return arr.slice(1)
  }
  if (nextKeywords.includes(arr[arr.length - 1])) {
    return arr.slice(0, arr.length - 1)
  }
  const changedArr = []
  for (let i = 0; i < arr.length; i++) {
    if (nextKeywords.includes(arr[i])) {
      if (arr[i] === '--double-next') {
        changedArr.push(arr[i + 1])
        changedArr.push(arr[i + 1])
      }
      i += 1
      continue
    }
    if (prevKeywords.includes(arr[i])) {
      if (arr[i - 2] === '--discard-next') {
        continue
      }
      if (arr[i] === '--double-prev') {
        changedArr.push(arr[i - 1])
        continue
      }
      if (arr[i] === '--discard-prev') {
        changedArr.pop()
        continue
      }
    }
    changedArr.push(arr[i])
  }
  return changedArr
}

module.exports = {
  transform
};
