module.exports = {
    name: 'ping',
    aliases: ['즐하'],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`즐거운 하루 \n${client.emotes.success} - Ping : **${client.ws.ping}ms** !`);
    },
};