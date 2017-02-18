'use strict';

const APP_CONST = require('../constant/app');
const request = require('request-promise');

/**
 * Sender
 * @param {any} token
 * @param {any} payload
 * @returns
 */
module.exports = (token, payload) => {
  const options = {
    method: 'POST',
    url: APP_CONST.API_URL.SEND,
    qs: token,
    json: payload
  };
  return request(options).catch(err => console.log(err));
};