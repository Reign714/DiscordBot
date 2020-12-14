module.exports = {
    run: async function (message) {
        if (message.author.id === "744329964043894924" || message.author.id === "705814419845677098") {
            message.channel.send(":arrows_counterclockwise: Successfully restarted the bot!");
            message.client.destroy();
        } else {
            message.reply(`You don't have permission to use that!`);
        }
    }
};