'use strict';

class Ban extends require('./../../../class/Command') {
    constructor(client) {
        super(client, {
            name: 'ban',
            description: 'Ban des personnes.',
            category: 'modération'
        });
        this.client = client;
    }
    async launch(message) {
    console.log('yeet')
    }
}

module.exports = Ban;