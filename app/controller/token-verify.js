'use strict';

const APP_CONST = require('../../constant/app');

module.exports = (req, res) => {
  if (req.query['hub.verify_token'] && req.query['hub.verify_token'] === APP_CONST.WEBHOOK.VALIDATION_TOKEN) {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Invalid verify token');
  }
};