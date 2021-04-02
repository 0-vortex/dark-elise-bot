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

    client.user.setActivity('with weapons bruh');
  }
}

module.exports = ReadyListener;
