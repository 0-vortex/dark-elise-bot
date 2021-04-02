const {Listener} = require('discord-akairo');

class PinoWarnListener extends Listener {
  constructor() {
    super('warn', {
      emitter: 'client',
      event: 'warn',
    });
  }

  exec(message) {
    const {logger} = this.client;

    logger.warn(message);
  }
}

module.exports = PinoWarnListener;
