'use strict';

const APP_CONST = require('../constant/app');
const RESPONSE_CONST = require('../constant/response');
const templates = require('../template');
const mock = require('../mock');
const handler = require('./handlers');
const sender = require('./sender');

const getMessageTemplate = type => templates[type];

const getMockData = type => mock[type];

const getTokenObject = () => (
  {
    access_token: APP_CONST.MESSAGE.ACCESS_TOKEN
  }
);

module.exports = (text, userId) => {
  var attachment = null;
  switch (text) {
    case 'text':
      sender(
        getTokenObject(),
        handler.text(userId, { text })
      );
      break;
    case 'image':
    case 'audio':
    case 'video':
    case 'button':
    case 'generic':
    case 'list':
    case 'call':
      attachment = Object.assign(
        {},
        getMessageTemplate(text),
        getMockData(text)
      );
      sender(
        getTokenObject(),
        handler.attachment(userId, { attachment })
      );
      break;
    case 'file':
      break;
    case 'quick-reply':
      attachment = Object.assign(
        {},
        getMessageTemplate('quickReply'),
        getMockData('quickReply')
      );
      sender(
        getTokenObject(),
        handler.text(userId, attachment)
      );
      break;
    default:
      attachment = Object.assign(
        {},
        getMessageTemplate('image'),
        getMockData('image')
      );
      text = RESPONSE_CONST.CONFUSED.TEXT[Math.floor(Math.random() * RESPONSE_CONST.CONFUSED.TEXT.length)];
      attachment.payload.url = RESPONSE_CONST.CONFUSED.GIF[Math.floor(Math.random() * RESPONSE_CONST.CONFUSED.GIF.length)];
      sender(
        getTokenObject(),
        handler.text(userId, { text })
      );
      sender(
        getTokenObject(),
        handler.attachment(userId, { attachment })
      );
      break;
  }
};