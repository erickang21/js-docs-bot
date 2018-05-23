const commando = require('discord.js-commando');

class DiceRoll extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            aliases: ['dice'],
            group: 'fun',
            memberName: 'roll',
            description: 'Roles a die'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply(`You rolled a ${roll}`);
    }
}

module.exports = DiceRoll;