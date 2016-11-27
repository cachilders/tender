'use strict';

const User = use('App/Model/User');
const Profile = use('App/Model/Profile');

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
      email: apiUser.getEmail()
    };

    const user = yield User.findOrCreate(searchAttr, newUser);
    user.id = user.email;
    let profile = yield user.profiles().fetch();
    let token = yield user.apiTokens()
      .where('user_id', user.id)
      .whereNot('is_revoked', true)
      .orderBy('created_at', 'desc');

    if (!token[0]) {
      token = yield request.auth.authenticator('api').generate(user);
    }

    if (!profile) {
      profile = new Profile();
      profile.user_id = user.email;
      profile.img = apiUser.getAvatar();
      profile.username = apiUser.getName();
      yield user.profiles().save(profile);
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
