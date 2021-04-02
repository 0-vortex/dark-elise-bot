const {Command} = require('discord-akairo');
const {MessageEmbed} = require('discord.js');

class PingCommand extends Command {
  constructor() {
    super('ping', {
      aliases: ['ping'],
    });
  }

  async exec(message) {
    const sent = await message.reply('Pong!');
    let dbIsConnected = true;

    try {
      await this.db.authenticate();
    } catch (error) {
      dbIsConnected = false;
    }

    const timeDiff = (sent.editedAt || sent.createdAt) - (message.editedAt || message.createdAt);

    const embed = new MessageEmbed()
      .setTitle('Pong !')
      .setTimestamp(new Date())
      .setColor('RANDOM')
      .setFooter('guns ... more guns !')
      .setDescription([
        `**DB**: ${dbIsConnected ? `dis` : ''}connected!`,
        `**MS**: ${timeDiff} ms`,
        `**WS**: ${Math.round(this.client.ws.ping)} ms`,
      ])
      .setThumbnail(message.author.avatarURL());

    return sent.edit('', {
      reply: message.member || message.author,
      embed,
    });
  }
}

module.exports = PingCommand;
