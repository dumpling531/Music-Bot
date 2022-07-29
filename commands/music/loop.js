module.exports = {
    name: 'loop',
    aliases: ['lp','반복'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 당신은 음성 채널에 있지 않습니다`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 당신은 같은 음성 채널에 있지 않습니다`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - 현재 재생중인 음악이 없습니다.`);

        if (client.player.getQueue(message).repeatMode) {
            client.player.setRepeatMode(message, false);
            return message.channel.send(`${client.emotes.success} - 반복 모드 **비활성화** 하였습니다.`);
        } else {
            client.player.setRepeatMode(message, true);
            return message.channel.send(`${client.emotes.success} - 반복 모드 **사용** 하였습니다.`);
        };
    },
};