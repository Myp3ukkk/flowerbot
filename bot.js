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
      .setColor(0x00ae86)
      .setDescription(
        ""
      )
      .setFooter(
        "Версия бота 0.1; Дата сборки - 19.07.2020"
      )
      .addField(
        "RP-команды",
        config.prefix + "туттипокоманда"
      )
      .addField(
        "Техническое",
        config.prefix + "ping - проверить пинг бота"
      );
    message.channel.send({ embed });
  }

  if (command === "ping") {
    const m = await message.channel.send("🌸 Ждём...");
    m.edit(`🌸 Пинг бота __${m.createdTimestamp - message.createdTimestamp}__ мс. Пинг Discord API __${Math.round(client.ping)}ms__ мс.`);
  }

  if (command === "punch") {
    if (!args.length) {
      return message.channel.send(
        `${message.author}, Нехватает аргументов команды`
      );
    }

    message.channel.send({
      embed: {
        color: 3447003,
        description: `🤜 | ${message.author} **ударил(а)** ${args[0]}`
      }
    });
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
