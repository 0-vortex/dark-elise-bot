const {Listener} = require('discord-akairo');

class ChannelCreateListener extends Listener {
  constructor() {
    super('channelCreate', {
      emitter: 'client',
      event: 'channelCreate',
    });
  }

  async exec(channel) {
    const {logger} = this.client;

    logger.info(`The channel ${channel.name} has been created in ${channel.guild.name}`);
  }
}

module.exports = ChannelCreateListener;
