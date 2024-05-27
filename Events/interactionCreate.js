
async function interactionCreate(client) {
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isChatInputCommand()) return;
    
        const command = interaction.client.commands.get(interaction.commandName);
    
        if (!command) {
            console.log(`No command records of ${interaction.commandName} was found.`)
            return;
        }
    
        try {
            await command.execute(itneraction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'there was an error while following this command!', ephemeral: true})
            } else {
                await interaction.reply({ content: 'there was an error while executing this command', ephemeral: true})
            }
        }
    })    
}


module.exports = { interactionCreate };