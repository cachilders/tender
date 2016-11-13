'use strict';

const Token = use('App/Model/Token');

class AttachTokenHeader {

  * handle (request, response, next) {
    const user = request.cookie('user', null);
    const token = yield Token.findBy('user_id', user);
    response.header('Authorization', 'Bearer ' + token.token);
    yield next;
  }

}

module.exports = AttachTokenHeader;
