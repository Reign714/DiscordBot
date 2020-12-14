const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
    run: async function (message) {
        const server = message.guild;
        const users = server.members.filter(m => !m.user.bot);
        const bots = server.members.filter(m => m.user.bot);
        const usersOnline = users.filter(m => m.presence.status !== "offline");
        const botsOnline = bots.filter(m => m.presence.status !== "offline");
        const boosters = users.filter(m => m.roles.some(r => r.managed));
        const desc = [];

        const embed = new Discord.RichEmbed()
            .setAuthor(server.name, message.guild.iconURL)
            .setTitle(`Server Info`)
            if (message.member.highestRole.color.toString() === "0") {
                embed.setColor("#95a5a6")
            } else {
                embed.setColor(message.member.highestRole.color)
            }
            embed.setThumbnail(message.guild.iconURL)
            .addField("Total Members", server.members.size, true)
            .addField("Users", `${usersOnline.size}/${users.size} online`, true)
            .addField("Bots", `${botsOnline.size}/${bots.size} online`, true)
            .addField("Roles", server.roles.size - 1, true)
            .addField("Emojis", server.emojis.size, true)
            .addField("Boosts", boosters.size, true)
            .addField("Owner", server.owner.user.tag, true)
            .addField("ID", server.id, true)
            .addField("Created",  moment(server.createdAt).format('MM/DD/YYYY, h:mm:ss a'), true);
        
        if (server.verified) {
            desc.push("Verified");
        }
        embed.setDescription(desc.join("\n"));
        
        message.channel.send(embed);
        return;
    }
};