const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
    run: async function (message, args) {
        var member = message.mentions.members.first();

        if (!message.member.hasPermission("BAN_MEMBERS")) {
            message.author.send(`Sorry ${message.author}, you don't have permission to use that!`);
            return;
        } else {
            if (!member) {
                message.reply("Please mention a valid member of this server!");
                return;
            } else {
                if (!member.bannable) {
                    message.reply("I can't ban this user! Do they have a higher role? Do I have ban permissions?");
                    return;
                } else {
                    var reason = args.slice(1).join(' ');
                    if (!reason) {
                        reason = "None";
                    }
                    await member.ban(reason).catch(error => message.reply(`Sorry ${message.author} I couldn't ban ${member} because ${error}`));
                    
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
                        .setTitle("Ban")
                        .setAuthor(message.guild.name, message.guild.iconURL)
                        .setThumbnail(member.user.displayAvatarURL)
                        .setTimestamp()
                    message.channel.send(embed);
                }
            }
        }
    }
};