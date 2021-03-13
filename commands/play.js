exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz!`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Por favor, indique o título de uma música!`);

    client.player.play(message, args.join(" "));

};
