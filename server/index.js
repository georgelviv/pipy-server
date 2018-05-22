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
    const httpSettings = Object.assign({}, this.settings.http, { 
      sendToWs: this.onSendToWs.bind(this)
    });
    this.httpServer = new HttpServer(httpSettings);
  }

  setSettings(settings) {
    this.settings = Object.assign({}, Server.defaultSettings, settings);
  }

  onSendToWs(msg) {
    return new Promise((resolve, reject) => {
      this.wsConnection.sendMsg({
        to: 'batman',
        from: 'server',
        type: 'request',
        data: msg
      });

      this.wsConnection.onMsg(msg => {
        resolve(msg);
      });
    });
  }


  onWsConnection(connection) {
    this.wsConnection = connection;


    connection.sendMsg({
      type: 'meta',
      name: 'server'
    });
  }

 
}

module.exports = Server;