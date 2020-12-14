const Discord = require('discord.js');
const client = new Discord.Client({
    disableEveryone: true
});

module.exports = client;
const config = require("./config.json");

const weather = require("weather-js");
const moment = require("moment");
const Canvas = require('canvas');
const fs = require("fs");

var Filter = require('bad-words');
const filter = new Filter();

async function clearmsg10() {
  const channel = client.channels.get("783361347848372274");
  const fetched = await channel.fetchMessages({limit: 10});
  channel.bulkDelete(fetched).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
};

async function clearmsg(count) {
  const channel = client.channels.get("783361347848372274");
  const fetched = await channel.fetchMessages({limit: count});
  channel.bulkDelete(fetched).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
};

client.on("ready", () => {
  console.log(`Client has started in ${client.guilds.size} servers.`);
  var today = new Date();
  client.user.setStatus("dnd");
  client.user.setActivity(` ${config.prefix}help`);
  var interval = setInterval (function () {
    const channel = client.channels.get("783361347848372274");
    var content = moment().format('h:mm a');
    var day = new Date().toLocaleString('en-us', {  weekday: 'long' });
    var color;
    //console.log(content);
    if (day === "Monday") {
      color = "Orange";
    } else if (day === "Tuesday") {
      color = "Black";
    } else if (day === "Wednesday") {
      color = "Orange";
    } else if (day === "Thursday") {
      color = "Black";
    } else if (day === "Friday") {
      color = "None";
    } else if (day === "Saturday") {
      color = "None";
    } else if (day === "Sunday") {
      color = "None";
    }

    if (color === "Orange") {
      if (content === "7:35 am") {
        channel.send("<@&783406420250329196> 1st period starts in 5 minutes!");
      } else if (content === "7:40 am") {
        channel.send("<@&783406420250329196> 1st period is starting now!");
      } else if (content === "9:16 am") {
        clearmsg10();
        channel.send("<@&783406420250329196> 2nd period starts in 5 minutes!");
      } else if (content === "9:21 am") {
        channel.send("<@&783406420250329196> 2nd period is starting now!");
      } else if (content === "11:32 am") {
        clearmsg10();
        channel.send("<@&783406420250329196> 3rd period starts in 5 minutes!");
      } else if (content === "11:37 am") {
        channel.send("<@&783406420250329196> 3rd period is starting now!");
      } else if (content === "1:13 pm") {
        clearmsg10();
        channel.send("<@&783406420250329196> 4th period starts in 5 minutes!");
      } else if (content === "1:18 pm") {
        channel.send("<@&783406420250329196> 4th period is starting now!");
      } else if (content === "2:52 pm") {
        clearmsg10();
      }
    } else if (color === "Black") {
      if (content === "7:35 am") {
        channel.send("<@&783406420250329196> 5th period starts in 5 minutes!");
      } else if (content === "7:40 am") {
        channel.send("<@&783406420250329196> 5th period 1st period is starting now!");
      } else if (content === "9:16 am") {
        clearmsg10();
        channel.send("<@&783406420250329196> 6th period starts in 5 minutes!");
      } else if (content === "9:21 am") {
        channel.send("<@&783406420250329196> 6th period is starting now!");
      } else if (content === "11:32 am") {
        clearmsg10();
        channel.send("<@&783406420250329196> 7th period starts in 5 minutes!");
      } else if (content === "11:37 am") {
        channel.send("<@&783406420250329196> 7th period is starting now!");
      } else if (content === "1:13 pm") {
        clearmsg10();
        channel.send("<@&783406420250329196> 8th period starts in 5 minutes!");
      } else if (content === "1:18 pm") {
        channel.send("<@&783406420250329196> 8th period is starting now!");
      } else if (content === "2:52 pm") {
        clearmsg10();
      }
    }
  }, 60 * 1000);
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
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
});

client.on('message', async message => {
  if (message.channel.id === "748298387278921828") {
    message.react("🐒");
  }

  if (message.content === "cm1") {
    const channel = client.channels.get(message.channel.id);
    const fetched = await channel.fetchMessages({limit: 10});
    channel.bulkDelete(fetched).catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }

  if (filter.isProfane(message.content)) {
    const member = message.author;
    const channel = message.client.channels.get("754132932708270151");

    const embed = new Discord.RichEmbed()
      if (message.member.highestRole.color.toString() === "0") {
        embed.setColor("#95a5a6")
      } else {
        embed.setColor(message.member.highestRole.color)
      }
      embed.addField("Name", message.member.displayName, true)
      .addField("Content", message.content, true)
      .addField("When", moment(message.createdAt).format('MM/DD/YYYY, h:mm:ss a'))
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setThumbnail(message.author.displayAvatarURL)
      .setTimestamp()
    channel.send(embed);

    message.delete();
    var reply = await message.reply("Please refrain from using that kind of language here!");
    reply.delete(5000);
  }

  if (message.author.bot) return;

  //console.log(`${message.guild.id}/${message.channel.id}/${message.author.id}/${moment(message.createdAt).format('DD & h-mm')}`)
  /*fs.appendFile('message.txt', `\n${message.content}/${message.author.name}/${moment(message.createdAt).format('DD & h-mm')}`, function (err) {
    if (err) throw err;
  });*/

  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let messageResponse = require("./commands/" + command + ".js").run(message, args, args.slice(1, args.length).join(" "), client, config);
    while (typeof messageResponse === "function") {
      messageResponse = await messageResponse;
    }
  } catch (err) {
    if (!`${err}`.includes("find module")) {
      if (message.author.id !== "744329964043894924") message.channel.send("Sorry, there was an error running that command. The developer was notified of this error.");
      (await client.fetchUser("744329964043894924")).send("There was an error running\n```" + message.content + "```\nran by **" + message.author.tag + "**:\n```" + err.stack + "```");
    }
  }
});

/*var interval = setInterval (function () {
  var start_time = moment().format('ss');
  if (start_time === "00") {
    client.login(config.token);
  }
}, 1 * 1000);*/

client.login(config.token);

client.on("warn", console.log).on("debug", console.log)
