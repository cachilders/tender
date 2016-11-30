'use strict';

const Submission = use('App/Model/Submission');

class SubmissionController {

  * index (request, response) {
    let user = request.cookie('user', null);
    console.log(request.cookie('user', null));
    try {
      const submissions = yield Submission.query().where('user_id', user);
      response.status(200).json(submissions);
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

module.exports = SubmissionController;
