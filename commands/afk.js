const Discord = require("discord.js");

module.exports = {
  run: async function (message) {
    if (message.guild.me.hasPermission('MANAGE_NICKNAMES')) {
      var embed = new Discord.RichEmbed()
      if (message.member.highestRole.color.toString() === "0") {
        embed.setColor("#95a5a6")
      } else {
        embed.setColor(message.member.highestRole.color)
      }

      if (message.member.displayName.includes(`[AFK]`)) {
        message.member.setNickname(null);
        embed.setTitle("You no longer have the AFK status!")
      } else {
        message.member.setNickname(`[AFK] ${message.member.displayName}`);
        embed.setTitle("You now have the AFK status!")
      }
      message.channel.send(embed);
    } else {
      message.reply('I don\'t have permission to change your nickname!');
    }
  }
};