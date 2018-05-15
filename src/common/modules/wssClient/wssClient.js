import { WSS_SERVER_PORT, WSS_SERVER_LINK } from 'common';

class WssClient {

  static get defaultSettings() {
    return { 
      port: 8080,
      link: 'localost'
    }
  }

  constructor(configs) {
    this.configs = Object.assign({}, WssClient.defaultSettings, configs);

    this.connect();
  }

  log(msg) {
    console.log(`wssClient: ${ msg }`)
  }

  connect() {
    this.socket = new WebSocket(`ws://${ this.configs.link }:${ this.configs.port }/`, 'echo-protocol');

    this.log('connecting...');

    this.socket.onopen = () => {
      this.log("Connection established.");
    };
    
    this.socket.onclose = (event) => {
      if (event.wasClean) {
        this.log('Connection closed');
      } else {
        this.log('Connection killed'); // например, "убит" процесс сервера
      }
      this.log('Code: ' + event.code + ' reason: ' + event.reason);
    };
    
    this.socket.onmessage = (event) => {
      this.log("message " + event.data);
    };
    
    this.socket.onerror = (error) => {
      this.log("Error " + error.message);
    };
  }
};

const wssClient = new WssClient({ link: WSS_SERVER_LINK, port:  WSS_SERVER_PORT });

export { wssClient };