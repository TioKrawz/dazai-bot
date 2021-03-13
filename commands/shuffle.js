exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando no momento!`);

    client.player.shuffle(message);

    return message.channel.send(`${client.emotes.success} - Fila embaralhada **${client.player.getQueue(message).tracks.length}** música (s) !`);

};
