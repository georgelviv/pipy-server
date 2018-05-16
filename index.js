const Server = require('./server');
const globals = require('./config/globals');
const fs = require('fs');

const server = new Server({
  port: globals.SERVER_PORT,
  auth:   {
    domain: 'pipy.eu.auth0.com',
    clientID: '6oCjSMnsMFaWRwxkA9GGqnGs80rDC9n5',
    clientSecret: 'GLdih5Wlga6CGTQ86y49nWFkgbUFwYU__3cPdoJNF_y8_Lx11OL4l44VwTtNDF5U',
    authDomain: 'pipy.eu.auth0.com',
    callbackURL: 'http://localhost:3000/callback'
  }
});


// const DBClient = require('./server/dbClient');

// const dbClient = new DBClient({
//   port: '10128',
//   host: 'redis-10128.c13.us-east-1-3.ec2.cloud.redislabs.com',
//   password: 'BbdLqpDNsrJ94d3jMh1nAQu6fdbMXjJL'
// });

// dbClient.connect().then(_ => {
//   dbClient.set('boo', 'woo')
//   dbClient.get('boo').then(value => console.log('im', value))
// });