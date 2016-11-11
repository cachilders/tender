module.exports = {
  ally: {

    google: {
      clientId: process.env.GOOGLE_OAUTH_CLIENT,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET,
      redirectUri: process.env.GOOGLE_OAUTH_REDIRECT // process.env.GOOGLE_OAUTH_REDIRECT_LOCAL
    }

    // // TODO developer credentials
    // // Configuration for github
    // github: {
    //   clientId: '',
    //   clientSecret: '',
    //   redirectUri: ''
    // }

  }
};
