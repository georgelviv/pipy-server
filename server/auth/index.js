const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

class Auth {

  static get defaultOptions() {
    return {
      domain: 'pipy.eu.auth0.com',
      clientID: 'SeDTO3ThzUxwWTDaOYjx1PK5xDfnDyps',
      clientSecret: 'YOUR_CLIENT_SECRET',
      authDomain: 'AUTH_URL',
      callbackURL: 'http://localhost:3000/callback'
    }
  }

  constructor(options) {
    this.options = Object.assign({}, Auth.defaultOptions, options);

    this.setStrategy();
    this.setupPassport();
  }

  getPassport() {
    return this.passport;
  }

  getPassportMiddleware() {
    const { domain, clientID, clientSecret, callbackURL, authDomain } = this.options;

    return this.passport.authenticate('auth0', {
      clientID: clientID,
      domain: domain,
      redirectUri: callbackURL,
      audience: 'https://' + authDomain + '/userinfo',
      responseType: 'code',
      scope: 'openid'
    });
  }

  setupPassport() {
    this.passport = passport;
    this.passport.use(this.strategy);
    this.passport.serializeUser((user, done) => {
      done(null, user);
    });
    this.passport.deserializeUser((user, done) => {
      done(null, user);
    });
  }

  setStrategy() {
    const { domain, clientID, clientSecret, callbackURL } = this.options;

    this.strategy = new Auth0Strategy({
      domain: domain,
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: callbackURL
    }, (accessToken, refreshToken, extraParams, profile, done) => {
      return done(null, profile);
    });
  }
}

module.exports = Auth;