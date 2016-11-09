'use strict';

const Lucid = use('Lucid');

class Submission extends Lucid {

  users () {
    return this.hasOne('App/Model/User');
  }

}

module.exports = Submission;
