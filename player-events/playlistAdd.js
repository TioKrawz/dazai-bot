module.exports = (client, message, playlist) => {

    message.channel.send(`${client.emotes.music} - ${playlist.title} foi adicionado à fila (**${playlist.items.length}** canções) !`);

};