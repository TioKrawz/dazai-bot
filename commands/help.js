exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'ORANGE',
            author: { name: 'Painel de ajuda' },
            footer: { text: 'github.com/reconlx/music-bot' },
            fields: [
                { name: 'Dazai Music', value: '`ping`' },
                { name: 'Music', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`' },
            ],
            timestamp: new Date(),
            description: `Para usar filtros, ${client.config.prefix}filtro (o filtro). Exemplo : ${client.config.prefix}filtro 8D.`,
        },
    });

};
