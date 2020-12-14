const Discord = require("discord.js");

module.exports = {
  run: async function (message) {
    const member = message.mentions.members.first();

    const { createCanvas, loadImage, registerFont } = require('canvas');
    registerFont(__dirname + '/fonts/Roboto.ttf', { family: 'Roboto', weight: 'normal' });
    
    img = await loadImage(__dirname + '/images/hornyjailbonk.jpg');
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    ctx.font = '25px Roboto';
    //ctx.rotate(-0.1);
    ctx.fillStyle = '#FFF';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 10;

    var text;
    const authorNickname = message.guild.members.get(message.author.id).nickname;
    if (!authorNickname) {
      text = message.author.username;
    } else {
      text = authorNickname;
    }

    var text2;
    if (!member.displayName) {
      text2 = member.username;
    } else {
      text2 = member.displayName;
    }
    const textDimen = ctx.measureText(text);
    //ctx.strokeText(text, (img.width / 2 - textDimen.width / 2) - 155, img.height - 280);
    ctx.fillText(text, (img.width / 2 - textDimen.width / 2) - 155, img.height - 280);
    //ctx.strokeText(text2, (img.width / 2 - textDimen.width / 2) + 205, img.height - 105);
    ctx.fillText(text2, (img.width / 2 - textDimen.width / 2) + 205, img.height - 105);

    if (!member) {
      message.reply("Please mention a valid member of this server!");
    } else {
      //message.channel.send(member, { files: [canvas.toBuffer()] });
      message.channel.send({ files: [canvas.toBuffer()] });
      /*const embed = new Discord.RichEmbed()
      embed.setImage(canvas.toBuffer());
      if (message.member.highestRole.color.toString() === "0") {
        embed.setColor("#95a5a6")
      } else {
        embed.setColor(message.member.highestRole.color)
      }
      await message.channel.send(`${member}\n`, embed);*/
    }
  }
};