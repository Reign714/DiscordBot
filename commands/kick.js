const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
    run: async function (message, args) {
        const member = message.mentions.members.first();

        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send(`Sorry ${message.author}, you don't have permission to use that!`);
        } else {
            let member = message.mentions.members.first() || message.guild.members.get(args[0]);
            if (!member) {
                message.reply("Please mention a valid member of this server");
            } else {
                if (!member.kickable) {
                    message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
                } else {
                    var reason = args.splice(1).join(" ");
                    if (!reason) {
                        reason = "None";
                    }

                    await member.kick(reason).catch(error => message.reply(`Sorry ${message.author} I couldn't kick ${member} because ${error}`));
                    
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
                        .setTitle("Kick")
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
                    channel.send(embed);
                }
            }
        }
    }
};