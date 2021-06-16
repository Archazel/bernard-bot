'use strict';

const { readdirSync } = require('fs');
const klaw = require('klaw');
const { parse, sep, resolve } = require('path');
const { Intents } = require('discord.js');
const BernardClient = require('./BernardClient');
const { PREFIX, DISCORD_TOKEN } = require('../config');

const client = new BernardClient({
    intents: Intents.ALL,
	partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER', 'GUILD_MEMBER'],
	presence: {
		activity: {
			name: `${PREFIX}help`,
			type: 'STREAMING',
			url: 'https://www.twitch.tv/noxaled_',
		},
		status: 'dnd',
		afk: false,
	},
});

const eventFiles = readdirSync('./src/events');

for (const file of eventFiles) {
	client.loadEvents(file);
}

klaw(resolve(__dirname, './commands')).on('data', (item) => {
	const cmdFile = parse(item.path);
	if (!cmdFile.ext || cmdFile.ext !== '.js') return;
	client.loadCommands(
		`${cmdFile.dir}${sep}${cmdFile.name}${cmdFile.ext}`,
	);
});

client.login(DISCORD_TOKEN);