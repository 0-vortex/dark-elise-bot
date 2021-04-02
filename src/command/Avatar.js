const {Command} = require('discord-akairo');
const {MessageEmbed} = require('discord.js');

class AvatarCommand extends Command {
  constructor() {
    super('avatar', {
      aliases: ['avatar'],
      channelRestriction: 'guild',
      args: [{
        id: 'member',
        type: 'member',
        match: 'content',
        default: message => message.member,
      }],
    });
  }

  exec(message, args) {
    const target = !args.member ? message.author : args.member.user;

    const embed = new MessageEmbed()

      .setTitle(message.author.username)
      .setDescription(`ID: ${message.author.avatar}`)
      .setURL(target.avatarURL())
      .setImage(target.displayAvatarURL())
      .setTimestamp()
      .setFooter(`Requested by ${target.username}`);

    return message.reply('', {
      embed,
    });
  }
}

module.exports = AvatarCommand;
