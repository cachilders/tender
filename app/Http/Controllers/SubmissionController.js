'use strict';

const Submission = use('App/Model/Submission');

class SubmissionController {

  * index (request, response) {
    const user = request.cookie('user', null);
    console.log(request.cookie('user', null));
    try {
      const submissions = yield Submission.query().where('user_id', user);
      response.status(200).json(submissions);
    } catch (e) {
      response.send(e.message);
    }
  }

  * create (request, response) {
    // Form to add sub
  }

  * store (request, response) {
    // FORMAT:
    // request.submission = {
    //   submittedTo: 'Some Publisher',
    //   submissionMethod: 'Email',
    //   contactInformation: 'some@email.com',
    //   dueDate: '11/20/2017',
    //   submittedDate: '12/1/2016',
    //   status: 'Submitted',
    //   linkToListing: 'whatever.com/fun-website',
    //   notes: 'Nothing special to speak of',
    //   draftUrl: 'google.docs/doc'
    // };
    const user = request.cookie('user', null);
    const formSub = request.submission;
    const submission = yield Submission.create({
      user_id: user,
      submitted_to: formSub.submittedTo,
      submission_method: formSub.submissionMethod,
      contact_information: formSub.contactInformation,
      due_date: formSub.dueDate,
      submitted_date: formSub.submittedDate,
      status: formSub.status,
      link_to_listing: formSub.linkToListing,
      notes: formSub.notes,
      draft_url: formSub.draftUrl
    });
    try {
      yield submission.save();
      response.status(200).json(submission);
    } catch (e) {
      response.send(e.message);
    }
  }

  * show (request, response) {
    try {
      const submission = yield Submission.query()
        .where('id', request.param('id'))
        .first();
      if (submission) {
        response.send(submission.attributes);
      } else {
        response.send('Hm. That record doesn\'t exist.');
      }
    } catch (e) {
      console.error(e.message);
    }
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
