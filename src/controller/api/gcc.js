const BaseRest = require('../rest.js');

module.exports = class extends BaseRest {
  async postAction () {
    this.ctx.body = this.ctx.utils.wrapResult({
      text: 'from gcc.js postAction'
    }, 0, '');
  }
};
