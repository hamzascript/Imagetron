const { SlashCommandBuilder, EmbedBuilder, Component } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('fetches the ping of arktos'),
    run: ({ interaction, client, handler }) => {
        const pingEmbed = new EmbedBuilder().setTitle('Ping').setDescription(`⌛ | Arktos is at ${client.ws.ping}`)
        interaction.reply({ embeds: [pingEmbed] })
    },
    options: {
        
    },
}