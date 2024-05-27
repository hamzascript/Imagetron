const fs = require('node:fs')
const path = require('node:path')
const { REST, Routes } = require('discord.js');
require("dotenv").config()

const commands = [];


async function loadCommands(client) {
    const filePath = path.join(__dirname, '../Commands')
    const commandFolders = fs.readdirSync(filePath);

    for (const folder of commandFolders) {
        const commandsPath = path.join(filePath, folder);
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))
        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);

            if('data' in command && 'execute' in command) {
                client.commands.set(command.data.name, command);
            } else {
                console.log(`[WARNING] the ${filePath} command is missing a required data or executre property.`)
            }
        }
    }

    const rest = new REST().setToken("place_your_token_here");

    (async () => {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);
    
            const data = await rest.put(
                Routes.applicationCommands('1221364272421146706'),
                { body: commands },
            );
    
            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {1
            console.error(error);
        }
    })();

}




module.exports = { loadCommands }