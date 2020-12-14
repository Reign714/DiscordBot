/*client.on("guildCreate", () => {
  client.user.setActivity(` ${config.prefix}help`);
});

client.on("guildDelete", () => {
  client.user.setActivity(` ${config.prefix}help`);
});*/

/*client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'welcome');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage(__dirname + '\\commands\\images\\wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	//ctx.font = Canvas.applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the server, ${member}!`, attachment);
});*/

/*client.on("channelCreate", channel => {
  logChannel.send(`${memberJoined} joined, invited by ${memberJoined.invite}`);
});

client.on("guildMemberAdd", channel => {
  logChannel.send(`New channel "${channel.name}" created by ${channel.crea}`);
});

client.on("guildMemberAdd", memberJoined => {
  const inviteListChannel = client.channels.get("747585757954310245");
  inviteListChannel.send(`${memberJoined} joined, invited by ${memberJoined.invite}`);
});*/

//for (var i = 0; i < banned.length; i++) {
    //if (banned.some(word => message.content.includes(word))) {
    /*if (filter.isProfane(message.content)) {

      const member = message.author;
      const channel = message.client.channels.get("754132932708270151");

      const embed = new Discord.RichEmbed()
        if (message.member.highestRole.color.toString() === "0") {
          embed.setColor("#95a5a6")
        } else {
          embed.setColor(message.member.highestRole.color)
        }
        embed.addField("Sender", message.member.displayName, true)
        .addField("Content", message.content, false)
        .addField("Channel", `#${message.channel.name}`, false)
        .addField("When", moment(message.createdAt).format('MM/DD/YYYY, h:mm:ss a'))
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setTitle("Message Deleted")
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
      channel.send(embed);

      message.delete();
      var reply = await message.reply("Please refrain from using that kind of language here!");
      reply.delete(5000);
    }*/
  //}

  /*client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (filter.isProfane(newMessage.content)) {
    const member = newMessage.author;
    const channel = newMessage.client.channels.get("754132932708270151");

    const embed = new Discord.RichEmbed()
      if (newMessage.member.highestRole.color.toString() === "0") {
        embed.setColor("#95a5a6")
      } else {
        embed.setColor(newMessage.member.highestRole.color)
      }
      embed.addField("Name", newMessage.member.displayName, true)
      .addField("Content", newMessage.content, true)
      .addField("When", moment(newMessage.createdAt).format('MM/DD/YYYY, h:mm:ss a'))
      .setAuthor(newMessage.guild.name, newMessage.guild.iconURL)
      .setThumbnail(newMessage.author.displayAvatarURL)
      .setTimestamp()
    channel.send(embed);

    newMessage.delete();
    var reply = await newMessage.reply("Please refrain from using that kind of language here!");
    reply.delete(5000);
  }
});*/