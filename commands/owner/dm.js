const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dm',
            group: 'owner',
            memberName: 'dm',
            description: 'Sends a message to the user you mention.',
            examples: ['dm @User Hi there!'],
            args: [{
                key: 'user',
                prompt: 'Which user do you want to send the DM to?',
                type: 'user'
            },
            {
                key: 'content',
                prompt: 'What would you like the content of the message to be?',
                type: 'string'
            }
         ]
       });    
    }

    hasPermission(msg) {
        if (!this.client.isOwner(msg.author)) return 'Only the bot owner(s) may use this command.';
        return true;
    }
    
    run(msg, { user, content }) {
        return user.send(content);

    }
};