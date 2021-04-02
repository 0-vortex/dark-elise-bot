const {Listener} = require('discord-akairo');

class RoleCreateListener extends Listener {
  constructor() {
    super('roleCreate', {
      emitter: 'client',
      event: 'roleCreate',
    });
  }

  async exec(role) {
    const {logger} = this.client;

    logger.info(`The role ${role.name} has been created in ${role.guild.name}`);
  }
}

module.exports = RoleCreateListener;
