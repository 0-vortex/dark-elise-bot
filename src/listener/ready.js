const {Listener} = require('discord-akairo');

class ReadyListener extends Listener {
  constructor() {
    super('ready', {
      emitter: 'client',
      event: 'ready',
    });
  }

  exec() {
    const {client} = this;
    const {logger} = client;

    const userCount = Object.keys(client.users).length;
    const channelCount = Object.keys(client.channels).length;
    const guildCount = Object.keys(client.guilds).length;

    logger.info(`the client becomes ready to start`);
    logger.info(`I am ready! Logged in as ${client.user.tag}!`);
    logger.info(`Bot has started, with ${userCount} users, in ${channelCount} channels of ${guildCount} guilds.`);

    if (typeof process.env.RICH_PRESENCE_STATUS !== 'undefined') {
      client.user.setActivity(
        process.env.RICH_PRESENCE_STATUS === 'true' ? 'with technology' : process.env.RICH_PRESENCE_STATUS,
      );
    }
  }
}

module.exports = ReadyListener;
