const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsCounter = {}

  domains.map(domain => {
    const splittedDomain = domain.split('.').reverse()
    for (let i = 0; i < splittedDomain.length; i++) {
      const reconstructedDomain = '.' + splittedDomain.slice(0, i + 1).join('.')
      if (domainsCounter[reconstructedDomain] === undefined ) {
        domainsCounter[reconstructedDomain] = 0
      }
      domainsCounter[reconstructedDomain] += 1
    }
  })
  return domainsCounter
}

module.exports = {
  getDNSStats
};
