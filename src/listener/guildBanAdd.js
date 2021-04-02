const {Listener} = require('discord-akairo');

class GuildBanAddListener extends Listener {
  constructor() {
    super('guildBanAdd', {
      emitter: 'client',
      event: 'guildBanAdd',
    });
  }

  async exec(guild, user) {
    const {logger} = this.client;

    logger.info(`${user.tag} has been banned in ${guild.name}`);
  }
}

module.exports = GuildBanAddListener;
