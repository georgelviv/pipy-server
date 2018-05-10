const redis = require('redis')

class DBClient {
  constructor() {
    this.client = redis.createClient({
      host: 'redis-10128.c13.us-east-1-3.ec2.cloud.redislabs.com',
      port: '10128'
    });
    this.client.on('error', this.errorHandler.bind(this));
  }

  errorHandler(err) {
    this.log('error:');
    console.log(err)
  }

  log(msg) {
    console.log(`db: ${ msg }`);
  }
};

module.exports = DBClient;