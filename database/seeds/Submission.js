'use strict'

const Factory = use('Factory');

class SubmissionSeeder {

  * run () {
    yield Factory.model('App/Model/Submission').create(15);
  }

}

module.exports = SubmissionSeeder;
