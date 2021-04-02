const {Listener} = require('discord-akairo');

class PinoDebugListener extends Listener {
  constructor() {
    super('debug', {
      emitter: 'client',
      event: 'debug',
    });
  }

  exec(message) {
    const {logger} = this.client;

    logger.debug(message);
  }
}

module.exports = PinoDebugListener;
