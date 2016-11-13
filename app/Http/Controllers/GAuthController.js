'use strict';

const User = use('App/Model/User');
const Token = use('App/Model/Token');

class GAuthController {
  * redirect (request, response) {
    yield request.ally.driver('google').redirect();
  }

  * handleCallback (request, response) {
    const googleUser = yield request.ally.driver('google').getUser();

    const searchAttr = {
      email: googleUser.getEmail()
    };

    const newUser = {
      username: googleUser.getName(),
      email: googleUser.getEmail(),
      avatar: googleUser.getAvatar()
    };

    const user = yield User.findOrCreate(searchAttr, newUser);
    user.id = user.email; // Schema uses email as unique identifier
    let token = yield Token.findBy('user_id', user.id);

    if (!token || token.is_revoked) {
      token = yield request.auth.generate(user);
    }

    response
      .cookie('user', user.id, { path: '/' })
      .redirect('/users/' + user.email);
  }

  * revoke (request, response) {
    const user = yield User.find('email', request.cookie('user', null));
    yield request.auth.revokeAll(user);
    response
      .cookie('user', null, { path: '/' })
      .redirect('/');
  }

}

module.exports = GAuthController;
