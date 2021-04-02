const {Listener} = require('discord-akairo');

class ChannelDeleteListener extends Listener {
  constructor() {
    super('channelDelete', {
      emitter: 'client',
      event: 'channelDelete',
    });
  }

  async exec(channel) {
    const {logger} = this.client;

    logger.info(`The channel ${channel.name} has been deleted in ${channel.guild.name}`);
  }
}

module.exports = ChannelDeleteListener;
