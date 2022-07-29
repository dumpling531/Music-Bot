module.exports = {
    name: 'skip',
    aliases: ['sk','스킵'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 음성 채널이 아닙니다.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 같은 음성 채널에 있지 않습니다.`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - 현재 재생중인 음악이 없습니다.`);

        client.player.skip(message);

        message.channel.send(`${client.emotes.success} - 현재 음악은 **스킵** 되었습니다 !`);
    },
};