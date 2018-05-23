const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            aliases: ['copycat', 'repeat', 'echo', 'parrot'],
            group: 'owner',
            memberName: 'say',
            description: 'Replies with the text you provide.',
            examples: ['say Hi there!'],
            clientPermissions: ['MANAGE_MESSAGES'],
            guildOnly: true,
            throttling: {
                usages: 2,
                duration: 10
            },
            args: [
                {
                    key: 'text',
                    prompt: 'ex:c.say No bananas :+1:',
                    type: 'string',
                    validate: text => {
                        if (text.length < 201) return true;
                        return 'Message is longer then 200 characters :-1:'
                    } 
                }
            ]
        });
    }
    hasPermission(msg) {
        if (!this.client.isOwner(msg.author)) return 'Only the bot owner(s) may use this command.';
        return true;
    }
    
    run(msg, { text }) {
        msg.delete();
        return msg.say(text);

    }
};
