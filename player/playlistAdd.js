module.exports = (client, message, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} 이 재생목록에 추가 되었습니다. (**${playlist.items.length}**) !`);
};