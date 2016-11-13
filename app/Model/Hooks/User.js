'use strict';

const Hash = use('Hash');

const User = exports = module.exports = {};

User.encryptPassword = function * (next) {
  if (this.password) {
    this.password = yield Hash.make(this.password);
  }
  yield next;
};
