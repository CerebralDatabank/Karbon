const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.react("🆔");
    message.reply(`**Your Discord ID is: ${message.author.id}**`)
}

module.exports.help = {
  name: "discordid"
}
