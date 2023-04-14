const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  function testSample(sample) {
    return /^\d+.?\d*$/.test(sample) && sample <= 15 && sample > 0;
  }
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof sampleActivity !== 'string') {
    return false
  }
  
  if (!testSample(sampleActivity)) {
    return false
  }
  const time = -Math.floor(
    (Math.log(sampleActivity) - Math.log(MODERN_ACTIVITY)) 
    /
    (0.693 / HALF_LIFE_PERIOD)
    );
  return time

}

module.exports = {
  dateSample
};
