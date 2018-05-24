const Server = require('./server');
const globals = require('./config/globals');
const fs = require('fs');

const server = new Server({
  http: {
    port: globals.SERVER_PORT,
    auth:   {
      domain: 'pipy.eu.auth0.com',
      clientID: '6oCjSMnsMFaWRwxkA9GGqnGs80rDC9n5',
      clientSecret: 'GLdih5Wlga6CGTQ86y49nWFkgbUFwYU__3cPdoJNF_y8_Lx11OL4l44VwTtNDF5U',
      authDomain: 'pipy.eu.auth0.com',
      callbackURL: 'http://localhost:3000/callback'
    }
  },
  ws: {
    port: globals.WS_SERVER_PORT,
    serverLink: globals.WS_SERVER_URL,
    reconnectTimeout: globals.WS_RECONNECT_TIMEOUT
  }
});
