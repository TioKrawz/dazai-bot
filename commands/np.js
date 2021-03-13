exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando no momento!`);

    const track = await client.player.nowPlaying(message);
    const filters = [];

    Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
        if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
    });

    message.channel.send({
        embed: {
            color: 'RED',
            author: { name: track.title },
            footer: { text: 'coded by Kamixd$' },
            fields: [
                { name: 'Canal', value: track.author, inline: true },
                { name: 'Requerido por', value: track.requestedBy.username, inline: true },
                { name: 'Da lista de reprodução', value: track.fromPlaylist ? 'Sim' : 'Não', inline: true },

                { name: 'Visualizações', value: track.views, inline: true },
                { name: 'Duração', value: track.duration, inline: true },
                { name: 'Filtros ativados', value: filters.length, inline: true },

                { name: 'Barra de progresso', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });

};
