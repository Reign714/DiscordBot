const Discord = require("discord.js");

module.exports = {
    run: async function (message) {
      message.react("✅");
      const embed = new Discord.RichEmbed()
        if (message.member.highestRole.color.toString() === "0") {
          embed.setColor("#95a5a6")
        } else {
          embed.setColor(message.member.highestRole.color)
        }
        embed.addField('Fun', '- `meme`, - `day`, - `avatar`, - `weather`, - `time`', false)
        .addField('Info', '- `help`, - `server`, - `user`, - `ping`, - `uptime`', false)
        .addField('Moderation', '- `ban`, - `clear`, - `kick`, - `lockdown`, - `mute`, - `unmute`, - `warn`, - `banned`', false)
        .setTimestamp();
      message.channel.send(embed);
    }
};