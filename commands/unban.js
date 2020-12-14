const Discord = require("discord.js");
const moment = require("moment");
const client = require("..");

module.exports = {
    run: async function (message, args, member) {
      let userID = args[0];

      if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.author.send(`Sorry ${message.author}, you don't have permission to use that!`);
        return;
      } else {
        if (!userID) {
            message.reply("Please provide the ID of a valid banned user!");
            return;
        } else {
          message.guild.fetchBans().then(async bans=> {
          if (bans.size == 0) {
            message.reply("That user is not banned!");
            return;
          } else {
            let bannedMember = await client.users.get(args[0]);
            if (!bannedMember) {
              message.reply("That user is not banned!");
              return;
            } else {
              message.guild.unban(bannedMember.id)
              
              const moderatorNickname = message.guild.members.get(message.author.id).nickname;
                
              const embed = new Discord.RichEmbed()
              if (message.member.highestRole.color.toString() === "0") {
                  embed.setColor("#95a5a6")
              } else {
                  embed.setColor(message.member.highestRole.color)
              }
              embed.addField("Name", bannedMember.username, true)
              .addField("Moderator", moderatorNickname, true)
              .addField("When", moment(message.createdAt).format('MM/DD/YYYY, h:mm:ss a'))
              .setTitle("Unban")
              .setAuthor(message.guild.name, message.guild.iconURL)
              .setThumbnail(bannedMember.displayAvatarURL)
              .setTimestamp()
              message.channel.send(embed);
            }
          }
          });
        }
      }
  }
};