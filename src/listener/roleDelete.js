const {Listener} = require('discord-akairo');

class RoleDeleteListener extends Listener {
  constructor() {
    super('roleDelete', {
      emitter: 'client',
      event: 'roleDelete',
    });
  }

  async exec(role) {
    const {logger} = this.client;

    logger.info(`The role ${role.name} has been deleted in ${role.guild.name}`);
  }
}

module.exports = RoleDeleteListener;
