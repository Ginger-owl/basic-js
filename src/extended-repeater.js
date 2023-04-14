const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  /* if (str == 'null' || String(str) === '' || options.repeatTimes == 'null') {
    return false
  }
  let sep = options.separator == 'null' ? '+' : String(options.separator)
  let res = String(str)
  let addition = String(options.addition)
  let additionSep = options.additionSeparator == 'null' ? '|' : String(options.additionSeparator)

  if (addition != 'null') {
    let addPart = ''
    if (String(str) === '' || String(str) == 'null' || options.repeatTimes == 'null') {
      let addPart = String(options.addition)
          for (let i = 0; i < options.repeatTimes - 1; i++) {

      if (options.additionRepeatTimes == 0 || !/^\d$/.test(options.additionRepeatTimes)) {
        for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
          addPart += additionSep + addition
        }
      }
    }
    
      res += sep + String(str) + addPart
    }
  }
  return res */
}

module.exports = {
  repeater
};
