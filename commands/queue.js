exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz!`);

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando no momento!`);

    message.channel.send(`**Server queue - ${message.guild.name} ${client.emotes.queue}**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
        return `**#${i + 1}** - ${track.title} | ${track.author} (Requerido por : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `E **${queue.tracks.length - 5}** outras canções ...` : `Na lista de reprodução **${queue.tracks.length}** música(s)...`}`));

};
