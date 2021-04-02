const ClientBot = require('./bot/Client');

(async () => {
  try {
    // setup bot
    const client = new ClientBot();

    // start the bot
    await client.login(process.env.BOT_TOKEN);
  } catch (err) {
    console.error(err);
  }
})();
