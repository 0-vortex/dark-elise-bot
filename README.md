# dark-elise-bot

[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
 [![License](https://img.shields.io/github/license/0-vortex/workers-lastfm-shields)](./LICENSE)
 [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2F0-vortex%2Fdark-elise-bot.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2F0-vortex%2Fdark-elise-bot?ref=badge_shield)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

![Beings of pure light descend into darkness to create new realities.](https://cdn.discordapp.com/app-icons/319966503673790464/9951dae7aa67afda1a674f4c8d3d1d9e.png?size=128)

## Overview

Dark Elise is an open source, multi-functional Discord bot that is constantly growing. 

The codebase also serves as a base framework to easily create Discord bots of all kinds.

You can test drive the ping command by using [this link](https://discord.com/api/oauth2/authorize?client_id=319966503673790464&permissions=93248&scope=bot).

## Folder structure

A quick look at the top-level files and directories you'll see in a Gatsby project.

```
├──── dark-elise-bot
│  ├── .github/
│  ├── src/
│  ├── .editorconfig
│  ├── .eslintrc.js
│  ├── .gitattributes
│  ├── .gitignore
│  ├── .lintstagedrc.js
│  ├── .npmrc
│  ├── compose.yml
│  ├── Dockerfile
│  ├── LICENSE
│  ├── npm-shrikwrap.json
│  ├── package.json
│  └── README.md
```

## Installation

Clone the package via `git`:

```shell
git clone git@github.com:0-vortex/derk-elise-bot.git
```

## Requirements

This repository requires `node>=v14.16.0` to be installed.

## How to use

This repository is featuring granular controls fully orthogonal to environment variables as specified by [the twelve-factor app](https://12factor.net) guidelines.

In order for the application to run we need the following environment variables set similar to the following example.
Without these variables the application will fail to start, so in order for the app to start locally we need to create an `.env` file with the following values:

```shell
BOT_TOKEN=UzE8OTY2NTBzNjczNzkwNDY0.BTWWBw.UwhtObbCJxVFLRkhqx48I7jL8Ys
NPM_CONFIG_PRODUCTION=false
```

To develop locally just run:

```shell
npm start
```

## Contributing

This repository uses `husky` with pre-commit and message hooks. All you need to do after staging some files is to run:

```shell
npm run push
```

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2F0-vortex%2Fdark-elise-bot.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2F0-vortex%2Fdark-elise-bot?ref=badge_large)
