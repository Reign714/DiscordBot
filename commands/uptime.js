module.exports = {
    run: async function (message, client) {
        /*let totalSeconds = (message.client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        message.channel.send(`${days} days, ${hours} hours, ${minutes} minutes and ${Math.round(seconds)} seconds`);*/

        var uptime = message.client.uptime;
        var days = Math.floor(uptime / 86400000);
        var hours = Math.floor(uptime / 3600000) % 24;
        var minutes = Math.floor(uptime / 60000) % 60;
        var seconds = Math.floor(uptime / 1000) % 60;

        //message.channel.send(`${days} days, ${hours} hours, ${minutes} minutes, and ${Math.round(seconds)} seconds.`);
        message.channel.send(`${days} days, ${hours} hours, ${minutes} minutes and ${Math.round(seconds)} seconds.`);
    }
};