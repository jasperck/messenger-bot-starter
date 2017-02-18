'use strict';

const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.tokenVerify.bind(controller.tokenVerify));
router.post('/', controller.messageEvent.bind(controller.messageEvent));

module.exports = router;
