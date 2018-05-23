const { Command } = require('discord.js-commando');


module.exports = class BanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            group: 'moderation',
            userPermissions: ['BAN_MEMBERS'],
            clientPermissions: ['BAN_MEMBERS'],
            guildOnly: true,
            memberName: 'ban',
            description: 'Ban the mentioned user.',
            
        });
    }

    run(message) {
            var personToKick = message.mentions.members.first();
            personToKick.ban();
            message.say(`${personToKick} has been banned`);
            
    }
};
