'use strict';

const APP_CONST = require('../../constant/app');

/**
 * Text handler
 * @param {any} id
 * @param {any} text
 * @returns
 */
module.exports = (id, text) => (
  {
    recipient: { id },
    message: text
  }
);