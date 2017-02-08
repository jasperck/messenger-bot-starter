'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const route = require('./route');
const APP_CONST = require('../constant/app');

class Server {
  /**
   * Constructor
   * @param config
   */
  constructor(config) {
    this.config = config || {};
    this.core = express();
  }

  /**
   * Initial middleware
   * @private
   */
  _initMiddleware() {
    this.core.use(bodyParser.json());
  }

  /**
   * Initial router
   * @private
   */
  _initRouter() {
    this.core.use(route);
  }

  /**
   * Boot server
   * @private
   */
  _boot() {
    this.core.listen(APP_CONST.PORT, console.log(`line bot server listened on ${APP_CONST.PORT}`));
  }

  /**
   * Boot server
   */
  boot() {
    this._initMiddleware();
    this._initRouter();
    this._boot();
  }

  /**
   * Halt server
   * @private
   */
  _halt() {
    process.exit();
  }
  
  /**
   * Halt server
   */
  halt() {
    this._halt();
  }
}

module.exports = Server;
