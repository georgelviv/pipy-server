const express = require('express');
const path = require('path');
const Auth = require('./auth');

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
    this.setupApp();
    this.setupRoutes(this.app);
    this.listen();
  }

  listen() {
    this.app.listen(this.settings.port, () => {
      this.log(`listen at: ${ this.settings.port }`)
    });
  }

  setupAuth() {
    this.auth = new Auth(this.settings.auth);

    const passport = this.auth.getPassport()

    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  setSettings(settings) {
    this.settings = Object.assign({}, Server.defaultSettings, settings);
  }

  setupMiddlewares(app) {
    app.use(express.static(this.settings.staticDirname));
    this.setupAuth();
  }

  setupRoutes(app) {
    app.get('/', (req, res) => {
      res.sendFile(this.settings.indexFile);
    });

    app.get('/login', this.auth.getPassportMiddleware(), (req, res) => {
        res.redirect('/')
      }
    );
  }

  setupApp() {
    const { port } = this.settings;
    this.app = express();

    this.setupMiddlewares(this.app);

    return this.app;
  }

  log(msg) {
    console.log(`server: ${ msg }`);
  }
}

module.exports = Server;