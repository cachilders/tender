'use strict';

const User = use('App/Model/User');

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
    // request.auth.loginViaId(user.id);
    // {email: user.email, token: googleUser.getAccessToken()}
    // response.json();
    response.redirect('/users/' + user.email);
  }

}

module.exports = GAuthController;
