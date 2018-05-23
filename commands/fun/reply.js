const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'reply',
            group: 'fun',
            memberName: 'reply',
            description: 'Replies with a Message.',
            examples: ['reply']
        });
    }

    async run(msg) {
        const message = await msg.say('Hi, I\'m awake!');
        return message.edit('I want to go to bed.');
    }
};
module.exports = ReplyCommand;