const pino = require('pino');

const args = {
  level: 'debug',
};

if (process.env.NODE_ENV === 'development') {
  (args.prettyPrint = {
    colorize: true,
    levelFirst: true,
    translateTime: true,
    ignore: 'pid,hostname',
  });
}

const logger = pino(args);

module.exports = logger;
