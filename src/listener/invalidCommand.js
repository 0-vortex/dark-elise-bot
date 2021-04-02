const {Listener} = require('discord-akairo');

class InvalidCommandListener extends Listener {
  constructor() {
    super('invalidCommand', {
      emitter: 'client',
      eventName: 'invalidUsage',
    });
  }

  async exec(message, command) {
    const {logger} = this.client;

    if (this.client.commandHandler.modules.has('help')) {
      logger.debug('Displaying help command for', command.id);
      const usage = await command.getUsage();
      return message.util.sendEmbed(usage);
    }
  }
}

module.exports = InvalidCommandListener;
