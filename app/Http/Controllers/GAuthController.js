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
    request.auth.loginViaId(user.id);
  }

}

module.exports = GAuthController;

// AllyUser {
//   _userFields:
//    { id: '106727722864205185907',
//      name: 'Casey A. Childers',
//      email: 'cachilders@gmail.com',
//      avatar: 'https://lh6.googleusercontent.com/-WH4v74yxML0/AAAAAAAAAAI/AAAAAAAAIYQ/Vt_obHvmQsQ/photo.jpg?sz=50',
//      nickname: 'Casey A. Childers' },
//   _tokenFields:
//    { accessToken: 'ya29.Ci-TA7RRtftN5_mwcreN7yRn366OakjnlxxegohZyT2e25neLOXENqKniVY2Ro8y4Q',
//      refreshToken: undefined,
//      tokenSecret: null,
//      expires: 3600 },
//   _original:
//    { kind: 'plus#person',
//      etag: '"xw0en60W6-NurXn4VBU-CMjSPEw/tU0vwKKF6ir0W5b3r2oK2sjB6zQ"',
//      occupation: 'Copywriter, Audiovisual Tech, Process Server, and Lover of Your Flaws',
//      gender: 'male',
//      emails: [ [Object] ],
//      objectType: 'person',
//      id: '106727722864205185907',
//      displayName: 'Casey A. Childers',
//      name: { familyName: 'Childers', givenName: 'Casey A.' },
//      tagline: 'Billable hours and lackluster powers.',
//      braggingRights: 'Wrote a book or two by arranging words into sentences.',
//      url: 'https://plus.google.com/106727722864205185907',
//      image:
//       { url: 'https://lh6.googleusercontent.com/-WH4v74yxML0/AAAAAAAAAAI/AAAAAAAAIYQ/Vt_obHvmQsQ/photo.jpg?sz=50',
//         isDefault: false },
//      isPlusUser: true,
//      language: 'en',
//      circledByCount: 76,
//      verified: false } }
