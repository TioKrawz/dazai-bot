module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Aqui estão os resultados da sua pesquisa para ${query}` },
            footer: { text: 'coded by Kamixd$' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });

};