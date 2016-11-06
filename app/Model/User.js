'use strict'

const Lucid = use('Lucid');

class User extends Lucid {

  profiles() {
    return this.hasOne('App/Model/Profile');
  }

  submissions() {
    return this.hasMany('App/Model/Submission');
  }

}

module.exports = User;
