module.exports = (client, message, query, tracks, content, collector) => {

    message.channel.send(`${client.emotes.error} - Você deve enviar um número válido entre ** 1 ** e **${tracks.length}** !`);

};