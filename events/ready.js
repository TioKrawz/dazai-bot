module.exports = async (client) => {

    console.log(`Pronto em ${client.guilds.cache.size} servidores, para um total de ${client.users.cache.size} usuários`);

    client.user.setActivity(client.config.game);

};
