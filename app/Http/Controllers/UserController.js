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

  // * index (request, response) {
  //   //
  // }

  // * create (request, response) {
  //   //
  // }

  // * store (request, response) {
  //   //
  // }

  // * edit (request, response) {
  //   //
  // }

  // * update (request, response) {
  //   //
  // }

  // * destroy (request, response) {
  //   //
  // }

}

module.exports = UserController;
