const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

class InviteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'misc',
            memberName: 'invite',
            description: 'Invite the bot to your server.',
            examples: ['invite']
        });
    }

    run(msg) {
        msg.say('https://discordapp.com/oauth2/authorize?client_id=431494884860493836&scope=bot&permissions=1341643969')
    }
};
module.exports = InviteCommand;