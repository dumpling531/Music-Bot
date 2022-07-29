module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - 음성채널에 더 이상 맴버가 없어 음악이 멈췄습니다.`);
};