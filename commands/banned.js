var Filter = require('bad-words');
const filter = new Filter();

module.exports = {
    run: async function (message) {
        /*var msg = "";
        msg += "```";
        msg += "Banned Words for " + message.guild.name + " are:";
        msg += "\n";
        for (var i = 0; i < filter.list.length; i++) {
            msg += "• " + filter.list[i]
            msg += "\n"
        }
        msg += "\n```"*/
        var reply = await message.channel.send(`There are ${filter.list.length} banned words. You can read them all here: __https://pastebin.com/dMNxq5Vc__`)
        message.delete(2500);
        reply.delete(15000);
    }
};