'use strict';

const { Client, Collection } = require('discord.js');


class BernardClient extends Client {
    constructor(options) {
        super(options);
        /**
         * * Options commandes
         */
        this.commands = new Collection();
        this.aliases = new Collection();
        /**
         * * System de log de shayn
         */
        this.logger = require('./../class/Logger');
    }

    /**
     * * Load fichier events
     * @param {String} eventPath - chemin d'accès aux events
     */
    loadEvents(eventPath) {
		try {
			const RequireEvent = require(`./events/${eventPath}`);
			const event = new RequireEvent(this);
			this.on(event.help.name, (...args) => event.handle(...args));
			this.logger.log(`Event: ${event.help.name} loaded !`);
		}
		catch (error) {
			this.logger.error(eventPath);
			console.error(error);
		}
    }
    /**
     * * Load fichiers commandes
     * @param {String} commandPath - chemin d'accès aux commandes
     */
    loadCommands(commandPath) {
        const RequiredCommand = require(commandPath);
        const command  = new RequiredCommand(this);
        try {
            command.conf.filename = commandPath;
            this.commands.set(command.help.name, command);
            command.conf.aliases.forEach((alias) => {
                this.aliases.set(alias, command.help.name);
            });
            this.logger.log(`Command: ${command.help.name} loaded !`)
        }
        catch (error) {
            this.logger.error(`Error: ${command.help.name} unload`);
            console.error(error);
        }
    }
}

module.exports = BernardClient;