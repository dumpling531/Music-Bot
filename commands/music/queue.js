module.exports = {
    name: 'queue',
    aliases: ['목록'],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 당신은 음성 채널에 있지 않습니다`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 같은 음성 채널에 있지 않습니다.`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - 현재 재생중인 노래가 없습니다.`);

        message.channel.send(`**서버 이름 - ${message.guild.name} ${client.emotes.queue}**\n현재 재생 곡 : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `또는 **${queue.tracks.length - 5}** 다른 노래...` : `재생 목록에서 **${queue.tracks.length}** 개(s)...`}`));
    },
};