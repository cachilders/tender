'use strict';

const User = use('App/Model/User');

class GAuthController {
  * redirect (request, response) {
    yield request.ally.driver('google').redirect();
  }

  * handleCallback (request, response) {
    const apiUser = yield request.ally.driver('google').getUser();

    const searchAttr = {
      email: apiUser.getEmail()
    };

    const newUser = {
      username: apiUser.getName(),
      email: apiUser.getEmail(),
      avatar: apiUser.getAvatar()
    };

    const user = yield User.findOrCreate(searchAttr, newUser);
    user.id = newUser.email;
    let token = yield user.apiTokens()
      .where('user_id', user.id)
      .whereNot('is_revoked', true)
      .orderBy('created_at', 'desc');

    if (!token[0]) {
      token = yield request.auth.authenticator('api').generate(user);
    }

    response
      .cookie('user', user.id, { path: '/' })
      .redirect('/users/' + user.email);
  }

  * revoke (request, response) {
    // non-functioning
    const user = yield User.find('email', request.cookie('user', null));
    yield request.auth.revokeAll(user);
    response
      .cookie('user', null, { path: '/' })
      .redirect('/');
  }

}

module.exports = GAuthController;
