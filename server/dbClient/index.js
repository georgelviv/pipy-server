const redis = require('redis')

class DBClient {

  static get defaultOptions() {
    return  {
      host: '127.0.0.1',
      port: '3000',
      password: '1111',
      onConnect: () => {}
    }
  };

  constructor(options) {
    this.options = Object.assign({}, DBClient.defaultOptions, options);

  }

  connect() {
    return new Promise((resolve, reject) => {
      this.client = redis.createClient({
        host: this.options.host,
        port: this.options.port
      });
  
      this.client.auth(this.options.password);

      this.client.on('error', (err) => {
        this.errorHandler(err);
        reject(error);
      });
      this.client.on('connect', () => {
        this.connectionHandler();
        resolve();
      });
    })
  }

  connectionHandler() {
    this.log('connected');
    this.options.onConnect();
  }

  errorHandler(err) {
    this.log('error:');
    console.log(err)
  }

  log(msg) {
    console.log(`db: ${ msg }`);
  }

  set(prop, value) {
    this.client.set(prop, value);
  }

  get(prop) {
    return new Promise((resolve, reject) => {
      this.client.get(prop, (err, reply) => {
        if (err) {
          this.log(`error on read prop ${ props }`);
          console.log(err);
          reject(err);
        }

        resolve(reply);

      })
    })
  }
};

module.exports = DBClient;