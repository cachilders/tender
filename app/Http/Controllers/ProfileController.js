'use strict';

const Profile = use('App/Model/Profile');

class ProfileController {

  * index (request, response) {
    try {
      const profiles = yield Profile.all();
      response.status(200).json(profiles);
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

module.exports = ProfileController;
