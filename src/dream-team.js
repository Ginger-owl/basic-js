const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) { return false }
  let lettersArr = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string') { continue }
    let memberTrimmed = members[i].trim();
    for (let j = 0; j < memberTrimmed.length; j++) {
      if (/[a-zA-Z]/.test(memberTrimmed[j])) {
        lettersArr.push(memberTrimmed[j].toUpperCase())
        break
      }
    }    
  }
  lettersArr.sort()
  return lettersArr.join('')
}

module.exports = {
  createDreamTeam
};
