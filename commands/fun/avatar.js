const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            group: 'fun',
            memberName: 'avatar',
            description: 'Returns your avatar.',
            examples: ['c.avatar']
        });
    }
    run(msg, args, user) {
        const embed = new MessageEmbed()
            .setImage(msg.author.avatarURL({ format: "png", size: 2048 }))
            .setAuthor(msg.author.username, msg.author.displayAvatarURL)
            .setColor(Math.floor(Math.random() * 0xFFFFFF))
            .setTimestamp();
        return msg.embed(embed);
    }
};
