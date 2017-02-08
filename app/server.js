'use strict';

const express = require('express');
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
  _initMiddleware() {}

  /**
   * Initial router
   * @private
   */
  _initRouter() {}

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