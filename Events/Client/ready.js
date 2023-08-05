module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log(`El cliente se ha inicializado.`);

        loadCommands(client);
    },
};
