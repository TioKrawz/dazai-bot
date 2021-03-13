exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando no momento!`);

    const repeatMode = client.player.getQueue(message).repeatMode;

    if (repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(`${client.emotes.success} - Modo de repetição ** desativado **!`);
    } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(`${client.emotes.success} - Modo de repetição ** habilitado **!`);
    };

};
