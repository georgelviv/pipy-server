const Server = require('./server');
const server = new Server({
  port: process.env.PORT || 3000
});