exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando no momento!`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - Por favor, coloque um numero!`);

    if (isNaN(args[0]) || 200 < args[0] || args[0] <= 0) return message.channel.send(`${client.emotes.error} - Por favor, insira um número válido (entre 1 e 200)!`);

    if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) return message.channel.send(`${client.emotes.error} - Por favor insira um número válido !`);

    client.player.setVolume(message, parseInt(args[0]));

    message.channel.send(`${client.emotes.success} - Volume definido para **${args.join(" ")}%** !`);

};
