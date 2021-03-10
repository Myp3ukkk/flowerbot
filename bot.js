const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  client.user.setPresence({ game: { name: `Cyberpunk 2077`, type: 0 } });
  client.user.setStatus("dnd");
});

client.on("message", async message => {
  if(message.author.bot) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  
  if (message.content === "Бот, ты жив?") {  
    message.channel.send("Прикинь да");
  }
  
  if (message.content === 'Вкид') {  
    const messages = ["🔥 Вкид оформлен\nВы вкинули **BABKUS**\nЖмых: `22/10 по шкале Анонимуса`",
                      "🔥 Вкид оформлен\nВы вкинули **чайный пакетик**\nЖмых: `3/10 по шкале Анонимуса`",
                      "🔥 Вкид оформлен\nВы вкинули **приправу от дошика**\nЖмых: `9/10 по шкале Анонимуса`",
                      "🔥 Вкид оформлен\nВы вкинули **большой ящик из Brawl Stars**\nЖмых: `11/10 по шкале Анонимуса`",
                      "🔥 Вкид оформлен\nВы вкинули **ящик из Brawl Stars**\nЖмых: `7/10 по шкале Анонимуса`",
                      "🔥 Вкид оформлен\nВы вкинули **липтон из 2011 года**\nЖмых: `8/10 по шкале Анонимуса`",
                      "🔥 Вкид оформлен\nВы вкинули **альбом Влада А4**\nЖмых: `15/10 по шкале Анонимуса`",
                      "🔥 Вкид оформлен\nВы вкинули **воздух**\nЖмых: `0/10 по шкале Анонимуса`",
                      "🚩 Ошибка оформления вкида\nВкидбанк не одобрил вашу заявку на вкид. *Попробуйте позже*"]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const m = await message.channel.send("🥌 Оформляем вкид [---]");
    setTimeout(function(){ 
    m.edit("🥌 Оформляем вкид [=--]");
     }, 1000);
    setTimeout(function(){ 
    m.edit("🥌 Оформляем вкид [==-]");
     }, 2000);
    setTimeout(function(){ 
    m.edit("🥌 Оформляем вкид [===]");
     }, 3000);
    setTimeout(function(){ 
    m.edit(randomMessage);
     }, 4000);
  }

  if (message.content === 'Супер вкид') {  
    const messages = ["🔥 Супер вкид оформлен\nВы вкинули **раритетный снюс 1892 года**\nЖмых: `6891/10 по шкале Анонимуса`",
                      "🔥 Супер вкид оформлен\nВы вкинули **винтажный снюс 1962 года**\nЖмых: `4095/10 по шкале Анонимуса`",
                      "🔥 Супер вкид оформлен\nВы вкинули **кристаллы из Brawl Stars**\nЖмых: `2301/10 по шкале Анонимуса`",
                      "🔥 Супер вкид оформлен\nВы вкинули **MORGENSHTERN - Cristal & МОЁТ (Клип + итоги 2020 года)**\nЖмых: `5587/10 по шкале Анонимуса`",
                      "🚩 Ошибка оформления вкида\nВкидбанк не одобрил вашу заявку на вкид. *Попробуйте позже*"]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const m = await message.channel.send("🍄 Оформляем супер вкид. Это может занять некоторое время [------]");
    setTimeout(function(){ 
    m.edit("🍄 Оформляем супер вкид. Это может занять некоторое время [=-----]");
     }, 2000);
    setTimeout(function(){ 
    m.edit("🍄 Оформляем супер вкид. Это может занять некоторое время [==----]");
     }, 4000);
    setTimeout(function(){ 
    m.edit("🍄 Оформляем супер вкид. Это может занять некоторое время [===---]");
     }, 6000);
    setTimeout(function(){ 
    m.edit("🍄 Оформляем супер вкид. Это может занять некоторое время [====--]");
     }, 8000);
    setTimeout(function(){ 
    m.edit("🍄 Оформляем супер вкид. Это может занять некоторое время [=====-]");
     }, 10000);
    setTimeout(function(){ 
    m.edit("🍄 Оформляем супер вкид. Это может занять некоторое время [======]");
     }, 12000);
    setTimeout(function(){ 
    m.edit(randomMessage);
     }, 14000);
  }

  if (message.content === "ping") {
    const m = await message.channel.send("🌸 Ждём...");
    m.edit(`🌸 Пинг бота __${m.createdTimestamp - message.createdTimestamp}__ мс. Пинг Discord API __${Math.round(client.ping)}__ мс.`);
  }

  if (command === "punch") {
    if (!args.length) {
      return message.channel.send(
        `🌸 ${message.author}, нехватает аргументов команды (см. ` + config.prefix + `help)`
      );
    }
    const embed = new Discord.RichEmbed()
      .setTitle("✦˛˙・ Действие")
      .setColor(0x00ae86)
      .setDescription(
        `${message.author} ударил(-а) ${args[0]}`
      )
      .setImage("https://us.v-cdn.net/6030983/uploads/810/20II4DOWG62S.gif");
    message.channel.send({ embed });
  }

  if (message.content === "embedcmd1test") {
    const embed = new Discord.RichEmbed()
      .setTitle("This is your title, it can hold 256 characters")
      .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
      .setColor(0x00ae86)
      .setDescription(
        "This is the main body of text, it can hold 2048 characters."
      )
      .setFooter(
        "This is the footer text, it can hold 2048 characters",
        "http://i.imgur.com/w1vhFSR.png"
      )
      .setImage("http://i.imgur.com/yVpymuV.png")
      .setThumbnail("http://i.imgur.com/p2qNFag.png")
      .setTimestamp()
      .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
      .addField(
        "This is a field title, it can hold 256 characters",
        "This is a field value, it can hold 1024 characters."
      )
      .addField("Inline Field", "They can also be inline.", true)
      .addBlankField(true)
      .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
    message.channel.send({ embed });
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
