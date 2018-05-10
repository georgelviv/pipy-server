const Server = require('./server');
const DBClient = require('./server/dbClient');

const dbClient = new DBClient();

const server = new Server({
  port: process.env.PORT || 3000,
  dbClient
});