const Discord = require("discord.js");

module.exports = {
    run: function (message) {
        let member = message.mentions.members.first();
        if (!member) {
            message.reply("You must specify a user!")
        } else {
            let embed = new Discord.RichEmbed();
                embed.setImage(member.user.displayAvatarURL)
                if (message.member.highestRole.color.toString() === "0") {
                    embed.setColor("#95a5a6")
                } else {
                    embed.setColor(message.member.highestRole.color)
                }
                embed.setTitle(`${member.user.tag}'s Avatar`);
            message.channel.send(embed);
        }
    }
};