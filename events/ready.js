module.exports = async (client) => {
    console.log(`봇이 정상적으로 ON 되었습니다.`); // 로딩 후 콘솔에 위와 같이 표시 합니다.

    client.user.setActivity(client.config.discord.activity);
};