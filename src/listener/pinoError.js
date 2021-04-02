const {Listener} = require('discord-akairo');

class PinoErrorListener extends Listener {
  constructor() {
    super('error', {
      emitter: 'client',
      event: 'error',
    });
  }

  exec(message) {
    const {logger} = this.client;

    logger.error(message);
  }
}

module.exports = PinoErrorListener;
