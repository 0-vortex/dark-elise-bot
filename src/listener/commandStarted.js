const {Listener} = require('discord-akairo');

class CommandStarted extends Listener {
  constructor() {
    super('commandStarted', {
      emitter: 'commandHandler',
      event: 'commandStarted',
    });
  }

  async exec(message, cmd, args) {
    const {logger} = this.client;

    logger.info(`${message.author.tag} executed the <${cmd}> command with arguments ${JSON.stringify(args)}`);
  }
}

module.exports = CommandStarted;
