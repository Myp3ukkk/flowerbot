const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd')
    client.user.setPresence({
        game: {
            name: 'пиздец'
        }
    });
});

client.on('message', message => {
    if (message.content === 'Кто ты?') {
    	message.reply('Я бот');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
