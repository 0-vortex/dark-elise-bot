const {
  AkairoClient,
  CommandHandler,
  ListenerHandler,
} = require('discord-akairo');
const path = require('path');

const logger = require('../util/logger');

class ClientBot extends AkairoClient {
  constructor() {
    super({
      // options for akairo go here
      ownerID: process.env.BOT_OWNER,
    }, {
      // options for discord.js go here
      disableEveryone: true,
    });

    this.commandHandler = new CommandHandler(this, {
      // options for command handler go here
      directory: path.join(__dirname, '..', 'command'),
      prefix: process.env.BOT_PREFIX,
    });

    this.listenerHandler = new ListenerHandler(this, {
      directory: path.join(__dirname, '..', 'listener'),
    });

    this.listenerHandler.setEmitters({
      commandHandler: this.commandHandler,
      listenerHandler: this.listenerHandler,
      process,
    });

    this.logger = logger;
  }

  async login(token) {
    this.commandHandler.loadAll();
    this.commandHandler.useListenerHandler(this.listenerHandler);
    this.listenerHandler.loadAll();

    return super.login(token);
  }
}

module.exports = ClientBot;
