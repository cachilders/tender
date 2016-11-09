'use strict';

const User = use('App/Model/User');

class UserController {

  * index (request, response) {
    try {
      const users = yield User.all();
      yield response.status(200).json(users);
    } catch (e) {
      response.send(e.message);
    }
  }

  * create (request, response) {
    //
  }

  * store (request, response) {
    //
  }

  * show (request, response) {
    //
  }

  * edit (request, response) {
    //
  }

  * update (request, response) {
    //
  }

  * destroy (request, response) {
    //
  }

}

module.exports = UserController;
