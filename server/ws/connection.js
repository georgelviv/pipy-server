class WSSConnection {
  constructor(connection) {
    this.connection = connection;

    this.onMsgHandler = () => {};
  
    this.connection.on('error', err => {
      console.log(`connection error: ${ err }`);
    });

    this.connection.on('close', () => {
      console.log('connection closed');
    });

    this.connection.on('message', (message) => {
      this.onMsgHandler(JSON.parse(message.utf8Data));
    });
  }

  onMsg(cb) {
    this.onMsgHandler = cb;
  }

  sendMsg(msg) {
    this.connection.sendUTF(JSON.stringify(msg));
  }
};

module.exports =  WSSConnection;