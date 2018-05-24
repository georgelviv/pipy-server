class WSSConnection {
  constructor(connection) {
    this.connection = connection;

    this.onMsgHandler = () => {};
    this.onConnectionCloseCb = () => {};
  
    this.connection.on('error', err => {
      console.log(`connection error: ${ err }`);
      this.onConnectionCloseCb();
    });

    this.connection.on('close', () => {
      console.log('connection closed');
      this.onConnectionCloseCb();
    });

    this.connection.on('message', (message) => {
      this.onMsgHandler(JSON.parse(message.utf8Data));
    });
  }

  onMsg(cb) {
    this.onMsgHandler = cb;
  }

  onConnectionClose(cb) {
    this.onConnectionCloseCb = cb;
  }

  sendMsg(msg) {
    this.connection.sendUTF(JSON.stringify(msg));
  }
};

module.exports =  WSSConnection;