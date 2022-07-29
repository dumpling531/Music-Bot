module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - 유효한 응답을 제공하지 않았습니다. 명령을 다시 보내십시오.`);
};