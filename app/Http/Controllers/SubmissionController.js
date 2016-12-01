'use strict';

const Submission = use('App/Model/Submission');

class SubmissionController {

  * index (request, response) {
    const user = request.cookie('user', null);
    try {
      const submissions = yield Submission.query().where('user_id', user);
      response.status(200).json(submissions);
    } catch (e) {
      response.send(e.message);
    }
  }

  * store (request, response) {
    // FORMAT:
    // request.submission = {
    //   submitted_to: 'Some Publisher',
    //   submission_method: 'Email',
    //   contact_information: 'some@email.com',
    //   due_date: '11/20/2017',
    //   submitted_date: '12/1/2016',
    //   status: 'Submitted',
    //   link_to_listing: 'whatever.com/fun-website',
    //   notes: 'Nothing special to speak of',
    //   draft_url: 'google.docs/doc'
    // };
    const user = request.cookie('user', null);
    const formSub = request.all().submission;
    const submission = yield Submission.create({
      user_id: user,
      submitted_to: formSub.submitted_to,
      submission_method: formSub.submission_method,
      contact_information: formSub.contact_information,
      due_date: formSub.due_date,
      submitted_date: formSub.submitted_date,
      status: formSub.status,
      link_to_listing: formSub.link_to_listing,
      notes: formSub.notes,
      draft_url: formSub.draft_url
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

  * update (request, response) {
    const submission = yield Submission.findBy('id', request.param('id'));
    if (submission) {
      try {
        submission.fill(request.all().submission);
        yield submission.save();
        response.status(200).json(submission);
      } catch (e) {
        console.error(e.message);
      }
    } else {
      response.send('Hm. That record doesn\'t exist.');
    }
  }

  * destroy (request, response) {
    const submission = yield Submission.findBy('id', request.param('id'));
    if (submission) {
      try {
        yield submission.delete();
        response.status(200).json('Record deleted.');
      } catch (e) {
        console.error(e.message);
      }
    } else {
      response.send('Hm. That record doesn\'t exist.');
    }
  }

}

module.exports = SubmissionController;
