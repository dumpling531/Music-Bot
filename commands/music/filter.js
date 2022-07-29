module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 음성채널에 없습니다`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 당신은 봇과 같은 음성 채널에 있지 않습니다.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - 현재 재생중인 음악이 없습니다.`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - 활성화 또는 비활성화하려면 유효한 필터를 지정하십시오`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - 이 필터는 존재하지 않습니다. 예를 들어 (8D, vibrato, pulsator ...)`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - 음악에 필터를 **추가**하고 있습니다. 잠시만 기다려주세요. 참고 : 음악이 길수록 더 오래 걸립니다.`);
        else message.channel.send(`${client.emotes.music} - 음악 필터를 **비활성화**하고 있습니다. 잠시만 기다려주세요. 참고 : 음악 재생 시간이 길수록 시간이 오래 걸립니다.`);
    },
};