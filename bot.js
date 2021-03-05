const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  client.user.setPresence({ game: { name: `Cyberpunk 2077`, type: 0 } });
  client.user.setStatus("dnd");
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "saycmd1adminsecret") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
  }

  if (command === "help") {
    const embed = new Discord.RichEmbed()
      .setTitle("Список комманд")
      .setAuthor("✦˛˙・ Flower bot 🌸", "https://cdn.discordapp.com/avatars/734402569937354753/4c31acd6112b5fec9e980741db0d1a9d.png")
      .setColor(0xF6A5FF)
      .setDescription(
        "*Справка: <аргумент> - обязательное; (аргумент) - необязательное*"
      )
      .setFooter(
        "Версия бота 0.2; Дата сборки - 20.07.2020"
      )
      .addField(
        "Основное",
        config.prefix + "avatar (@упоминание) - получить аватар пользователя"
      )
      .addField(
        "RP-команды",
        config.prefix + "punch <@упоминание> - ударить\n" + config.prefix + "valenok <@упоминание> - кинуть валенок\n" + config.prefix + "kill <@упоминание> - убить\n" + config.prefix + "hug <@упоминание> - обнять\n" + config.prefix + "kiss <@упоминание> - поцеловать\n" + config.prefix + "poke <@упоминание> - тыкнуть\n" + config.prefix + "pat <@упоминание> - погладить\n" + config.prefix + "lick <@упоминание> - лизнуть\n" + config.prefix + "bite <@упоминание> - укусить\n" + config.prefix + "vodka - уйти в запой\n" + config.prefix + "suicide - суицид\n"
      )
      .addField(
        "Техническое",
        config.prefix + "ping - проверить пинг бота"
      )
      .addField(
        "Основное",
        config.prefix + "invite - пригласить бота к себе на сервер"
      )
    message.channel.send({ embed });
  }

  if (command === "вкид") {
    const messages = ["🔥 Вкид оформлен\nВы вкинули `BABKUS EXTREME`\nЖмых: `22/10 по шкале Анонимуса`",
                      "🔥 Вкид оформлен\nВы вкинули `чайный пакетик`\nЖмых: `3/10 по шкале Анонимуса`",
                      "🔥 Вкид оформлен\nВы вкинули `приправу от дошика`\nЖмых: `9/10 по шкале Анонимуса`",
                      "🔥 Вкид оформлен\nВы вкинули `большой ящик из Brawl Stars`\nЖмых: `11/10 по шкале Анонимуса`"]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const m = await message.channel.send("🥌 Оформляем вкид");
    setTimeout(function(){ 
    m.edit("🥌 Оформляем вкид.");
     }, 1000);
    setTimeout(function(){ 
    m.edit("🥌 Оформляем вкид..");
     }, 2000);
    setTimeout(function(){ 
    m.edit("🥌 Оформляем вкид...");
     }, 3000);
    setTimeout(function(){ 
    m.edit(randomMessage);
     }, 6000);
  }

  if (command === "ping") {
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

  if (command === "embedcmd1") {
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
