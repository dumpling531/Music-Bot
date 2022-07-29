module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - 채널과의 연결이 끊어져 음악이 멈췄습니다.`);
};