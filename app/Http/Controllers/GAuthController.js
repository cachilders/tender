'use strict';

const User = use('App/Model/User');

class GAuthController {
  * redirect (request, response) {
    yield request.ally.driver('google').redirect();
  }

  * handleCallback (request, response) {
    const googleUser = yield request.ally.driver('google').getUser();
    console.log(googleUser);
    const searchAttr = {
      email: googleUser.getEmail()
    };

    const newUser = {
      email: googleUser.getEmail(),
      avatar: googleUser.getAvatar(),
      username: googleUser.getName()
    };

    const user = yield User.findOrCreate(searchAttr, newUser);
    // user.getAccessToken()
    request.auth.loginViaId(user.id);
  }

}

module.exports = GAuthController;
