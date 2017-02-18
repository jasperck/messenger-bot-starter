'use strict';

const messageHandler = require('../../lib/message-handler');

/**
 * Message event handler
 * @param {any} req
 * @param {any} res
 */
module.exports = (req, res) => {
  const messageing_events = req.body.entry[0].messaging;
  messageing_events.map((event) => {
    const userId = event.sender.id;
    if (event.message) {
      const text = event.message && event.message.text ? event.message.text : null;
      if (text) {
        messageHandler(text, userId);
      }
    } else if (event.postback) {
      return true;
    }
  });
  res.json();
};