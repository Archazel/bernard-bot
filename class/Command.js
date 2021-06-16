'use strict';

/**
 * Template
 */
class Command {
	/**
     * @param {Client} client
     */
	constructor(client, {
		name = ''.trim().toLowerCase(),
		description = null,
		category = 'user',
		usage = [],
		aliases = [],
		userPerm = [],
		botPerm = [],
		enable = Boolean,
		cooldown = Number,
		filename = __filename,
	}) {
		this.client = client;
		this.logger = require('./Logger');
		this.help = { name, description, category, usage };
		this.conf = { aliases, userPerm, botPerm, enable, cooldown, filename };
	}
}

module.exports = Command;