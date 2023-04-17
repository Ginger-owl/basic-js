const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain.length
  },
  
  addLink(value) {
    if (arguments.length == 0) {
      this.chain.push(' ');
    } else if (value === null) {
        this.chain.push('null');
    } else {
      this.chain.push(value);
    }
    return this;
  },

  removeLink(position) {
    if (!(/^\d+$/.test(position) && Number(position) < this.getLength() && position > 0)) {
      this.chain = []
      throw new Error('You can\'t remove incorrect link!')
    }
    this.chain.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },

  finishChain() {
    const resChain = [...this.chain]
    this.chain = []
    return `( ${resChain.join(' )~~( ')} )`
  },
  chain: []
};

module.exports = {
  chainMaker
};
