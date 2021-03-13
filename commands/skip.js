exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando no momento!`);

    client.player.skip(message);

    message.channel.send(`${client.emotes.success} - A música atual acaba de ser ** pulada **!`);

};
