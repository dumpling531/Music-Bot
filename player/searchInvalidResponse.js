module.exports = (client, message, query, tracks, content, collector) => {
    message.channel.send(`${client.emotes.error} - 다음의 노래 목록에서 해당 노래 번호 **1** 또는 **${tracks.length}** !`);
};