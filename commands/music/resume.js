module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 음성 채널이 아닙니다.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 같은 음성 채널에 있지 않습니다.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - 현재 재생중인 음악이 없습니다.`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - 음악이 이미 재생 중입니다`);

        client.player.resume(message);

        message.channel.send(`${client.emotes.success} - 노래 ${client.player.getQueue(message).playing.title} 재개 !`);
    },
};