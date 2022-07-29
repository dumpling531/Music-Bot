module.exports = {
    name: 'clear-queue',
    aliases: ['cq','재생목록초기화'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 음성채널에 없습니다`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - 현재 재생중인 음악이 없습니다`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - 재생목록이 방금 삭제 되었습니다.`);
    },
};