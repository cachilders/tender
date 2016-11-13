'use strict';

const User = use('App/Model/User');

class AttachTokenHeader {

  * handle (request, response, next) {
    const userId = request.cookie('user', null);
    const user = yield User.findBy('email', userId);
    user.id = userId;
    const token = yield request.auth.authenticator('api').generate(user)
    request.header('Authorization', 'Bearer ' + token.token);
    yield next;
  }

}

module.exports = AttachTokenHeader;
