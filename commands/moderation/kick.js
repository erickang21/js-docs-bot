const { Command } = require('discord.js-commando');


module.exports = class KickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'moderation',
            userPermissions: ['KICK_MEMBERS'],
            clientPermissions: ['KICK_MEMBERS'],
            guildOnly: true,
            memberName: 'kick',
            description: 'kick the mentioned user.',
            
        });
    }

    run(message) {
            var personToKick = message.mentions.members.first();
            personToKick.kick();
            message.say(`${personToKick} has been kicked`);
            
    }
};