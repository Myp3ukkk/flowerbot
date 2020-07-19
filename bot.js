const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  client.user.setPresence({ game: { name: `🌸 ${client.guilds.size} сервер(-ов) :з`, type: 0 } });
  client.user.setStatus("idle");
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`Меня добавили на ${guild.name} (id: ${guild.id})`);
  client.user.setPresence({ game: { name: `🌸 ${client.guilds.size} сервер(-ов) :з`, type: 0 } });
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`Меня удалили с ${guild.name} (id: ${guild.id})`);
  client.user.setPresence({ game: { name: `🌸 ${client.guilds.size} сервер(-ов) :з`, type: 0 } });
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "saycmd1") {
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
        ""
      )
      .setFooter(
        "Версия бота 0.1 [ALPHA]; Дата сборки - 19.07.2020"
      )
      .addField(
        "RP-команды",
        config.prefix + "punch <@упоминание> - ударить\n" + config.prefix + "valenok <@упоминание> - кинуть валенок\n" + config.prefix + "kill <@упоминание> - убить\n" + config.prefix + "hug <@упоминание> - обнять\n" + config.prefix + "kiss <@упоминание> - поцеловать\n"
      )
      .addField(
        "Техническое",
        config.prefix + "ping - проверить пинг бота"
      );
    message.channel.send({ embed });
  }

  if (command === "admin") {
    const m = await message.channel.send("```diff\n+ Загрузка админ панели +\n```");
    setTimeout(function(){ 
    m.edit("```diff\n- Ты опять выходишь на связь, мудило?\n```");
     }, 2000);
    setTimeout(function(){ 
    m.edit("```diff\n- СКОЛЬКО РАЗ ТЕБЕ БЛЯТЬ ОБЪЯСНЯТЬ ДОЛБОЁБИНА ТЫ ВЕЛИКОВОЗРАСТНАЯ БЛЯТЬ\n```");
     }, 6000);
    setTimeout(function(){ 
    m.edit("```diff\n- Лови валенок в ебальник\n```");
     }, 12000);
    setTimeout(function(){ 
    const embed = new Discord.RichEmbed()
      .setTitle("✦˛˙・ Действие")
      .setColor(0x00ae86)
      .setDescription(
        `<@734402569937354753> кинул(-а) валенок в ${message.author}`
      )
      .setImage("https://memepedia.ru/wp-content/uploads/2020/06/guchi-flip-flaps-768x527.jpg");
    message.channel.send({ embed })
     }, 14000);
  }

  if (command === "avatar") {
    const user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
      .setTitle("✦˛˙・ Аватар ${args[0]}" + user.username)
      .setImage(user.avatarURL);
    message.channel.send({ embed });
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

  if (command === "valenok") {
    if (!args.length) {
      return message.channel.send(
        `🌸 ${message.author}, нехватает аргументов команды (см. ` + config.prefix + `help)`
      );
    }
    const embed = new Discord.RichEmbed()
      .setTitle("✦˛˙・ Действие")
      .setColor(0x00ae86)
      .setDescription(
        `${message.author} кинул(-а) валенок в ${args[0]}`
      )
      .setImage("https://memepedia.ru/wp-content/uploads/2020/06/guchi-flip-flaps-768x527.jpg");
    message.channel.send({ embed });
  }

  if (command === "kill") {
    if (!args.length) {
      return message.channel.send(
        `🌸 ${message.author}, нехватает аргументов команды (см. ` + config.prefix + `help)`
      );
    }
    const embed = new Discord.RichEmbed()
      .setTitle("✦˛˙・ Действие")
      .setColor(0x00ae86)
      .setDescription(
        `${message.author} убил(-а) ${args[0]}`
      )
      .setImage("https://i.pinimg.com/originals/2f/db/9b/2fdb9b55326dae2fdff809173932532b.gif");
    message.channel.send({ embed });
  }

  if (command === "hug") {
    if (!args.length) {
      return message.channel.send(
        `🌸 ${message.author}, нехватает аргументов команды (см. ` + config.prefix + `help)`
      );
    }
    const embed = new Discord.RichEmbed()
      .setTitle("✦˛˙・ Действие")
      .setColor(0x00ae86)
      .setDescription(
        `${message.author} обнял(-а) ${args[0]}`
      )
      .setImage("https://media1.tenor.com/images/7e30687977c5db417e8424979c0dfa99/tenor.gif?itemid=10522729");
    message.channel.send({ embed });
  }

  if (command === "kiss") {
    if (!args.length) {
      return message.channel.send(
        `🌸 ${message.author}, нехватает аргументов команды (см. ` + config.prefix + `help)`
      );
    }
    const embed = new Discord.RichEmbed()
      .setTitle("✦˛˙・ Действие")
      .setColor(0x00ae86)
      .setDescription(
        `${message.author} поцеловал(-а) ${args[0]}`
      )
      .setImage("https://i.imgur.com/agdhkfE.gif");
    message.channel.send({ embed });
  }

  if (command === "me") {
    const sayMessage = args.join(" ");
    message.channel.send({
      embed: {
        color: 15844367,
        description: `| ${message.author} **` + sayMessage + `**`
      }
    });
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

  if (command === "invite") {
    message.author.send({
      embed: {
        color: 15844367,
        description:
          "https://discordapp.com/oauth2/authorize?client_id=664850581537685506&scope=bot&permissions=8"
      }
    });
    message.author.send(
      "👇 **ХАЛЯВНАЯ ЛИЦЕНЗИЯ MINECRAFT** 👇\nhttps://discord.gg/w2eMyY4"
    );
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
