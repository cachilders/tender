'use strict';

const User = use('App/Model/User');

class UserController {

  * show (request, response) {
    const user = yield User.query()
      .where('email', request.param('id'))
      .first();
    if (user && !user.locked) {
      try {
        response.send(user.attributes);
      } catch (e) {
        console.error(e.message);
      }
    } else if (user && user.locked) {
      response.send('While that account may exist, it appears to be inactive.');
    } else {
      response.send('Huh. Something went wrong.');
    }
  }

  * update (request, response) {
    const user = yield User.findBy('email', request.param('id'));
    if (user && user.locked === false) {
      try {
        user.fill(request.all().user);
        yield user.save();
        response.status(200).json(user);
      } catch (e) {
        console.error(e.message);
      }
    } else {
      response.send('Wierd. That user doesn\'t seem to exist.');
    }
  }

  * destroy (request, response) {
    const user = yield User.findBy('email', request.param('id'));
    if (user) {
      try {
        user.locked = true;
        yield user.save();
        response.status(200).json('The account: ' + user.email + ' has been suspended.');
      } catch (e) {
        console.error(e.message);
      }
    } else {
      response.send('Wierd. That user doesn\'t seem to exist.');
    }
  }

}

module.exports = UserController;
