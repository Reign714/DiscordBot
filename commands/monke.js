const Discord = require("discord.js");
const rp = require("random-puppy");

module.exports = {
  run: async function (message) {
    
    var reddit = [
      "monkeys"
    ]
    var subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    rp(subreddit).then(async url => {
      const embed = new Discord.RichEmbed()
      embed.setImage(url);
      if (message.member.highestRole.color.toString() === "0") {
        embed.setColor("#95a5a6")
      } else {
        embed.setColor(message.member.highestRole.color)
      }
      await message.channel.send(embed);
    }).catch(err => console.error(err));
  }
};