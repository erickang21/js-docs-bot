const fs = require('fs')
const Discord = require('discord.js');
const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const exec = require("child_process").exec;
const { MessageEmbed } = require('discord.js');
const MongoClient = require('mongodb').MongoClient;
const MongoDBProvider = require('commando-provider-mongo');

const client = new CommandoClient({
    commandPrefix: 'pyshit.',
    owner: ['292690616285134850', '349674631260667925'],
    disableEveryone: true,
    unknownCommandResponse: false
});

//['292690616285134850', '349674631260667925']

 


client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['fun', 'Fun commands'],
        ['owner', 'Owner commands'],
        ['moderation', 'Mod commands'],
        ['misc', 'Misc commands'],
        ['docs', 'Docs command']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));




client.login(process.env.TOKEN)
