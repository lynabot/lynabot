const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
        intents: [Guilds, GuildMembers, GuildMessages],
        partials: [User, Message, GuildMember, ThreadMember],
});

const { loadEvents } = require("./Handlers/eventHandler");

client.events = new Collection();
client.commands = new Collection();

loadEvents(client);

client.login("MTEzNDU3ODkzODYzNTYyMDM2Mg.GQEUCe.4_v3g4OSdfPF974y6MbSgEjNJbapQnbzyeBm54");
