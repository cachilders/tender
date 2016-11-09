'use strict'

const Submission = use('App/Model/Submission');

class SubmissionController {

  * index (request, response) {
    try {
      const submissions = yield Submission.all();
      response.status(200).json(submissions);
    } catch (e) {
      response.send(e.message);
    }
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = SubmissionController
