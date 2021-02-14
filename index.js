
const Discord = require("discord.js");
const config = require("./config.json");
const Ping = require("./commands/Ping");
const Random = require("./commands/Random");

const client = new Discord.Client();
const prefix = "/";

client.on("ready", () => console.log("··· − ·− ·−· − · −·· "));

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    switch(command){
        case 'ping':
            new Ping(message);
            break;
        case 'r':
            new Random(message, args);
            break;
        default:
            return;
    }
});

client.login(process.env.TOKEN);