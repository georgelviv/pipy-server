const express = require('express');
const path = require('path');

class Server {

  static get defaultSettings() {
    return { 
      port: 3000,
      staticDirname: path.resolve(__dirname, '..', 'build'),
      indexFile: path.resolve(__dirname, '..', 'build', 'index.html')
    }
  }

  constructor(settings) {
    this.setSettings(settings);
    this.app = this.setupApp();
  }

  setSettings(settings) {
    this.settings = Object.assign({}, Server.defaultSettings, settings);
  }

  setupMiddlewares(app) {
    app.use(express.static(this.settings.staticDirname));
  }

  setupRoutes(app) {
    app.get('/', (req, res) => {
      res.sendFile(this.settings.indexFile);
    });
  }

  setupApp() {
    const { port } = this.settings;
    const app = express();

    this.setupMiddlewares(app);
    this.setupRoutes(app);
    app.listen(this.settings.port, () => {
      this.log(`listen at: ${ this.settings.port }`)
    });

    return app;
  }

  log(msg) {
    console.log(`server: ${ msg }`);
  }
}

module.exports = Server;