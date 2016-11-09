'use strict'

const Lucid = use('Lucid');

class Profile extends Lucid {

  users () {
    return this.hasOne('App/Model/User');
  }

}

module.exports = Profile;
