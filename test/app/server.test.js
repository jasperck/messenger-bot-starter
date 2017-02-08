'use strict';

describe('Server module', () => {
  const Server = require('../../app/server');
  var sandbox = sinon.sandbox.create();
  const server = new Server();
  const APP_CONST = require('../../constant/app');
 
  describe('#constructor', () => {
    it('should construct `config` and `core` two properties', () => {
      server.should.have.property('config');
      server.should.have.property('core');
    });
  });
  
  describe('#boot', () => {
    before('init stub', () => {
      sandbox.spy(server, '_initMiddleware');
      sandbox.spy(server, '_initRouter');
      sandbox.spy(server, '_boot');
      sandbox.stub(server.core, 'listen', () => null);
    });
    before('boot server', () => server.boot());
    after('restore stub', () => sandbox.restore());

    it('should initial middleware', () => server._initMiddleware.callCount.should.eql(1));
    it('should initial router', () => server._initRouter.callCount.should.eql(1));
    it('should initial server', () => server._boot.callCount.should.eql(1));
    it('should make server listen on port defined', () => {
      server.core.listen.callCount.should.eql(1);
      server.core.listen.firstCall.args.should.include(APP_CONST.PORT);
    });
  });

  describe('#halt', () => {
    before('init stub', () => sandbox.stub(process, 'exit', () => null));
    before('halt server', () => server.halt());
    after('restore stub', () => sandbox.restore());
    
    it('should execute process exit', () => process.exit.callCount.should.eql(1));
  });
});