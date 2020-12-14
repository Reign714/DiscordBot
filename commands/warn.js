const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
    run: async function (message) {
      const member = message.mentions.members.first();

      if (message.member.hasPermission("MUTE_MEMBERS")) {
        if (!member) {
          message.reply("Please mention a valid member of this server!");
        } else {
          const moderatorNickname = message.guild.members.get(message.author.id).nickname;

          var embed = new Discord.RichEmbed()
            if (message.member.highestRole.color.toString() === "0") {
              embed.setColor("#95a5a6")
            } else {
              embed.setColor(message.member.highestRole.color)
            }
            embed.addField("Name", member.displayName, true)
            .addField("Moderator", moderatorNickname, true)
            .addField("When", moment(member.createdAt).format('MM/DD/YYYY, h:mm:ss a'))
            .setTitle("Warn")
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setTimestamp()
          message.channel.send(embed);
          var channel = await message.guild.channels.find(channel => channel.name === "logs");
          if (!channel) {
            try  {
              channel = await message.guild.createChannel("logs", {
                type: 'text',
              });
              //channel.setParent(message.channel.parent.id);
              channel.setParent("745779663107784785");
            } catch (err) {
              console.log(err);
            }
          }
          try {
            channel.send(embed);
          } catch (err) {
            console.log(err);
          }
        }
      } else {
        message.author.send(`Sorry ${message.author}, you don't have permission to use that!`);
      }
    }
};