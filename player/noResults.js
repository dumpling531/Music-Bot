module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - YouTube에서 다음에 대한 검색 결과가 없습니다. ( ${query} ) !`);
};