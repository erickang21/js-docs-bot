
const { Command } = require('discord.js-commando');
const exec = require("child_process").exec;



module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'exec',
            group: 'owner',
            memberName: 'exec',
            description: 'execute some code.',
            examples: ['exec 1'],
            args: [
                {
                    key: 'code',
                    prompt: 'code pls',
                    type: 'string'
                }
            ]
        });    
    }

    hasPermission(msg) {
      if (!this.client.isOwner(msg.author)) return 'Only the bot owner(s) may use this command.';
      return true;
  }
    run(msg, { code }) {
      exec(code, (error, stdout) => {
        const response = (error || stdout);
        msg.say(`Ran: ${code}\n${response}`, { code: true, split: "\n" }).catch(console.error);
       });
    }
  }