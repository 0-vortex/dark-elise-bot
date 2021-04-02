const {Listener} = require('discord-akairo');

class ReconnectingListener extends Listener {
  constructor() {
    super('reconnecting', {
      emitter: 'client',
      event: 'reconnecting',
    });
  }

  exec() {
    const {logger} = this.client;

    logger.info(`client is reconnecting to the WebSocket`);
  }
}

module.exports = ReconnectingListener;
