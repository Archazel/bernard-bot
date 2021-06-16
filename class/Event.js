'use strict';

 class Event {
	 /**
	  * @param {Client} client - discord client
	  */
    constructor(client, {
		name = null,
		filename = __filename,
	}) {
		this.client = client;
		this.help = { name };
		this.conf = { filename };
	}
}

module.exports = Event;
