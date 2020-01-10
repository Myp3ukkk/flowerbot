const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    client.user.setPresence({ game: { name: 'k.help', type: 0 } });
    client.user.setStatus('idle');
});

client.on("message", (message) => {
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(command === "admin.say") {
     const sayMessage = args.join(" ");
     message.delete().catch(O_o=>{});  
     message.channel.send(sayMessage);
        }
        }
if(command === "help") {
		message.channel.send("> k.ping - Проверка\n> k.serv - Наш сервер\n> k.mc - Халявная лицензия Minecraft\n *Бот в разработке*");
	}
if(command === "ping") {
		message.channel.send("> 🐾");
	}
if(command === "serv") {
		message.author.send("https://discord.gg/qS7nza3");
	}
if(command === "mc") {
		message.author.send("> Держи свой аккаунт:\n> ``braxtonian97@gmail.com:bmbbgk06``\n> (логин:пароль)\n> **Хочешь еще лицензию? Тогда тебе сюда - https://discord.gg/hMVQxwv **");
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
