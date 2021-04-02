const {Listener} = require('discord-akairo');

class GuildMemberRemoveListener extends Listener {
  constructor() {
    super('guildMemberRemove', {
      emitter: 'client',
      event: 'guildMemberRemove',
    });
  }

  async exec(member) {
    const {logger} = this.client;

    logger.info(`${member.user.tag} has been unbanned in ${member.guild.name}`);
  }
}

module.exports = GuildMemberRemoveListener;
