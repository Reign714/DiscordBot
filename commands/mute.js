const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
    run: async function (message, args, client) {
      const member = message.mentions.members.first();
      var reason = args[1];
      if (!reason) {
        reason = "None";
      }

      if (message.member.hasPermission("MUTE_MEMBERS")) {
        if (!member) {
          message.reply("Please mention a valid member of this server!");
        } else {
          var muteRole = message.guild.roles.find(muteRole => muteRole.name === "Muted");
          if (!muteRole) {
            try {
              muteRole = await message.guild.createRole({
                name: 'Muted',
                color: 'GRAY',
              });
            } catch (err) {
              console.log(err);
            }
          }
          message.channel.overwritePermissions(muteRole, {
            SEND_MESSAGES: false,
          });
          member.addRole(muteRole);

          const moderatorNickname = message.guild.members.get(message.author.id).nickname;

          const embed = new Discord.RichEmbed()
            if (message.member.highestRole.color.toString() === "0") {
              embed.setColor("#95a5a6")
            } else {
              embed.setColor(message.member.highestRole.color)
            }
            embed.addField("Name", member.displayName, true)
            .addField("Moderator", moderatorNickname, true)
            .addField("When", moment(member.createdAt).format('MM/DD/YYYY, h:mm:ss a'))
            .addField("Reason", reason)
            .setTitle("Mute")
            .setThumbnail(member.user.displayAvatarURL)
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setTimestamp()
          message.channel.send(embed);
          channel.send(embed);
        }
      } else {
        message.channel.send(`Sorry ${message.author}, you don't have permission to use that!`);
      }
    }
};   