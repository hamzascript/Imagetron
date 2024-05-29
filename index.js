require("dotenv").config();
const fs = require('node:fs')
const path = require('node:path')
const { Client, Collection, Events, GatewayIntentBits} = require('discord.js')
const { CommandKit } = require('commandkit')
const { token } = require('./config.json')
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] })

new CommandKit({
    client,
    commandsPath: path.join(__dirname, 'Commands'),
    eventsPath: path.join(__dirname, 'Events'),
    bulkRegister: true
})

function load(){
    client.login(token)
}

load()
