module.exports = {
    name: 'help',
    aliases: ['도움말','명령어'],
    category: 'Core',
    utilisation: '{prefix}명령어 <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: '도움말 명령어' },
                    footer: { text: '즐거운 코딩팀' },
                    fields: [
                        { name: '봇에 관한 명령어', value: infos },
                        { name: '노래에 관한 명령어', value: music },
                        { name: '필터에 관한 명령어', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `필더를 사용하시려면, ${client.config.discord.prefix} (필터). 예시 : ${client.config.discord.prefix}filter 8D`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - 해당 명령어는 없는 명령어 입니다`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: '도움말 명령어' },
                    footer: { text: '즐거운 코딩팀' },
                    fields: [
                        { name: '이름', value: command.name, inline: true },
                        { name: '카테고리', value: command.category, inline: true },
                        { name: '별칭(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join('\n'), inline: true },
                        { name: '이용하는 법', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: '제공된 명령어에 대한 청보를 찾아주세요.\n필수 - `[]`, 선택적 인수 - `<>`.',
                }
            });
        };
    },
};
