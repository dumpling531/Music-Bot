module.exports = {
    name: 'play',
    aliases: ['p','재생'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 음성채널이 아닙니다.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 같은 음성 채널에 있지 않습니다.`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - 노래 제목을 입력해 주세요`);

        client.player.play(message, args.join(" "));
    },
};