'use strict';

const { red } = require('chalk');

class Ready extends require('../../class/Event') {
    constructor(client) {
        super(client, {
            name: 'ready',
            filename: __filename,
        });
        this.client = client;
    }
    async handle() {
        console.log(red(`${this.client.user.username} ready !`));
    }
};

module.exports = Ready;