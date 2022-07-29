module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - 이 서버에서 재생중인 음악이 없습니다.`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - 음성 채널에 연결되어 있지 않습니다.`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - 음성 채널에 참여할 수 없습니다. 봇의 권한을 확인 해 주세요.`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Error : ${error}`);
    };
};
