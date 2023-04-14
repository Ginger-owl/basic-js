const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const fileNames = {}
  const newNames = []
  for (let name of names) {
    if (name in fileNames) {
      const newFileName = `${name}(${fileNames[name]})`
      newNames.push(newFileName)
      fileNames[name] = fileNames[name] + 1
      fileNames[newFileName] =  1
    } else {
      newNames.push(name)
      fileNames[name] = 1
    }
  }
  return newNames
}

/* if (newNames.includes(name)) {
  fileNames[name] =  1
  newNames.push(`${name}(${fileNames[name]})`)
} else { */

module.exports = {
  renameFiles
};
