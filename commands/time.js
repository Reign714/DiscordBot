const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
    run: async function (message) {
      var member = message.author;

      var embed = new Discord.RichEmbed()
        if (message.member.highestRole.color.toString() === "0") {
          embed.setColor("#95a5a6")
        } else {
          embed.setColor(message.member.highestRole.color)
        }
        embed.setTitle(moment(message.createdAt).format('MM/DD/YYYY, h:mm:ss a'))
      message.channel.send(embed);
    }
};