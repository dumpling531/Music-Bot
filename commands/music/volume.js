module.exports = {
    name: 'volume',
    aliases: ['볼륨','소리'],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 음성 채널이 아닙니다.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 같은 음성 채널에 있지 않습니다.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - 현재 재생중인 음악이 없습니다.`);

        if (!args[0] || isNaN(args[0])) return message.channel.send(`${client.emotes.error} - 유효한 번호를 입력하십시오`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - 유효한 숫자를 입력하십시오 (1 ~ 100)`);

        client.player.setVolume(message, args[0]);

        message.channel.send(`${client.emotes.success} - 볼륨이 조정 되었습니다. **${parseInt(args[0])}%**`);
    },
};