const {Listener} = require('discord-akairo');

class GuildBanRemoveListener extends Listener {
  constructor() {
    super('guildBanRemove', {
      emitter: 'client',
      event: 'guildBanRemove',
    });
  }

  async exec(guild, user) {
    if (!guild) return;

    // Fetch entry relating to action
    const entry = await guild.find_entry('MEMBER_BAN_REMOVE',
      e => e.target.id === user.id && e.createdTimestamp > Date.now() - 1000 * 60);
    if (!entry) return;

    // Fetch entries (w/ entry prepended)
    const entries = guild.push_entry(entry, user.tag);

    // Check limits
    guild.check_limits(entries, entry.executor.id, 'unbans');
  }
}

module.exports = GuildBanRemoveListener;
