module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - 재생목록에 더이상의 음악이 없어 음악이 중지되었습니다.`);
};