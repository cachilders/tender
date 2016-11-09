'use strict';

const Factory = use('Factory');

class UserSeeder {

  * run () {
    yield Factory.model('App/Model/User').create(5);
  }

}

module.exports = UserSeeder;
