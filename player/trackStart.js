module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - ${track.title}을 ${message.member.voice.channel.name}으로 재생 합니다.`);
};