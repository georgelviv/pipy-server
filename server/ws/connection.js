class WSSConnection {
  constructor(connection) {
    this.connection = connection;
  
    this.connection.on('error', err => {
      console.log(`connection error: ${ err }`);
    });

    this.connection.on('close', () => {
      console.log('connection closed');
    });
  }

  onMsg(cb) {
    this.connection.on('message', (message) => {
      cb(JSON.parse(message.utf8Data))
    });
  }

  sendMsg(msg) {
    this.connection.sendUTF(JSON.stringify(msg));
  }
};

module.exports =  WSSConnection;