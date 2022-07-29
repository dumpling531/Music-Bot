module.exports = {
    name: 'nowplaying',
    aliases: ['np','정보'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 음성 채널이 아닙니다.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 같은 음성 채널에 있지 않습니다.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - 현재 재생중인 음악이 없습니다.`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: '즐거운 하루' },
                fields: [
                    { name: '채널', value: track.author, inline: true },
                    { name: '님 께서', value: track.requestedBy.username, inline: true },
                    { name: '재생 목록에서', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: '보기', value: track.views, inline: true },
                    { name: '시간', value: track.duration, inline: true },
                    { name: '활성화된 필터', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: '볼륨', value: client.player.getQueue(message).volume, inline: true },
                    { name: '모드', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                    { name: '일시정지', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

                    { name: '노래바', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};