module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} - ${track.title} 재생목록이 추가 되었습니다.`);
};