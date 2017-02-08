'use strict';

describe('App constant', () => {
  const APP_CONST = require('../../constant/app');

  it('should define specific constants', () => APP_CONST.should.have.property('PORT').that.is.a('number'));
});