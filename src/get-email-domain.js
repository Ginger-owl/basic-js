const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let site = email.split('@')
  let domainArr = site[site.length - 1].split('.')
  let indexesArr = [domainArr.length - 2, domainArr.length - 1]
  return indexesArr.map((index) => domainArr[index]).join('.')
}

module.exports = {
  getEmailDomain
};
