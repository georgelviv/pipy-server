const HttpServer = require('./http');
const WsClient = require('./ws');

class Server {

  static get defaultSettings() {
    return { 
      http: {},
      ws: {}
    }
  }

  constructor(settings) {
    this.setSettings(settings);
    this.initHttpServer();
    this.initWsClient();
  }

  initWsClient() {
    const settings = Object.assign({}, this.settings.ws, { onConnection: this.onWsConnection.bind(this) });

    this.wsClient = new WsClient(settings);
  }

  initHttpServer() {
    this.httpServer = new HttpServer(this.settings.http);
  }

  setSettings(settings) {
    this.settings = Object.assign({}, Server.defaultSettings, settings);
  }

  onWsConnection(connection) {
    connection.onMsg(msg => {
      console.log(msg);
    });

    connection.sendMsg({
      type: 'meta',
      name: 'server'
    });

    setTimeout(() => {
      connection.sendMsg({
        to: 'batman',
        from: 'server',
        type: 'request',
        data: 'get_dht_sensor_data'
      });
    }, 2000);
  }

 
}

module.exports = Server;