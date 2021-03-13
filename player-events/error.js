module.exports = (client, error, message) => {

    switch (error) {
        case 'Não Tocando':
            message.channel.send(`${client.emotes.error} - Não há música sendo reproduzida neste servidor!`);
            break;
        case 'Não Conectado':
            message.channel.send(`${client.emotes.error} - Você não está conectado em nenhum canal de voz!`);
            break;
        case 'Incapaz de entrar':
            message.channel.send(`${client.emotes.error} - Não consigo entrar no seu canal de voz, verifique minhas permissões!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Algo deu errado ... Erro : ${error}`);
    };

};
