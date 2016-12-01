'use strict';

const User = use('App/Model/User');

class UserController {

  * show (request, response) {
    try {
      const user = yield User.query()
        .where('email', request.param('id'))
        .first();
      response.send(user.attributes);
    } catch (e) {
      console.error(e.message);
    }
  }

  * update (request, response) {
    try {
      const user = yield User.query()
        .where('email', request.param('id'))
        .first();
      response.send(user.attributes);
    } catch (e) {
      console.error(e.message);
    }
  }

}

module.exports = UserController;
