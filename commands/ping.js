module.exports = {
    run: async function (message, client) {
        const messawait = await message.channel.send("Ping?");
        messawait.edit(`Pong! Message Latency is ${messawait.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(message.client.ping)}ms`);
    }
};