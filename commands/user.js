const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
    run: async function (message) {
        var member = message.mentions.members.first() || message.member;
        /*var game = member.presence.game;
        game.name = game.name.toString();*/
        var embed = new Discord.RichEmbed()
            if (member.highestRole.color.toString() === "0") {
                embed.setColor("#95a5a6")
            } else {
                embed.setColor(member.highestRole.color)
            }
            embed.addField("ID", member.id, true)
            if (member.nickname === null) {
                embed.addField("Nickname", "None", true);
            } else {
                embed.addField("Nickname", member.nickname, true);
            }
            embed.addField('Status', member.presence.status)
            .addField("Joined Server",  moment(member.joinedAt).format('MM/DD/YYYY, h:mm:ss a'), false)
            .addField("Account Created",  moment(member.user.createdAt).format('MM/DD/YYYY, h:mm:ss a'), false)
            .addField("Highest Role", member.highestRole, true)
            //.addField("Playing", game.name, true)
            .setTitle('User Info')
            .setThumbnail(member.user.displayAvatarURL)
	        .setAuthor(member.user.tag, member.user.displayAvatarURL)
	        .setTimestamp();
        message.channel.send(embed);
    }
};