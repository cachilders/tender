'use strict'

const Lucid = use('Lucid');

class User extends Lucid {
  static boot() {
    super.boot();
    this.addHook('beforeCreate', 'User.encryptPassword');
  }

  profiles() {
    return this.hasOne('App/Model/Profile');
  }

  submissions() {
    return this.hasMany('App/Model/Submission');
  }

}

module.exports = User;
