const Client = require("../../structures/Client");
const { Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "userinfo",
  description: "userinfo of the person",
  category: "info",

  //IntelliSense
  /**
   * @param {Message} message
   * @param {Client} client
   * @param {String[]} args
   */

  run: async (client, message, args) => {
    let mentioneduser = message.mentions.users.first();

    if (!mentioneduser) {
      const userinfo = new MessageEmbed();
      userinfo.setTitle("Your UserInfo");
      userinfo.setColor(`RANDOM`);
      userinfo.setImage(message.author.displayAvatarURL());
      userinfo.addField("User ID", message.author.id);
      userinfo.addField("User Tag", message.author.tag);
      userinfo.addField("User Status", message.author.presence.status);
      userinfo.addField("Last Message", message.author.lastMessage);
      userinfo.addField("Bot", `${message.author.bot}`, true);
      userinfo.setFooter(`Requested by ${message.author.tag}`);
      message.channel.send(userinfo);
    } else {
      const otherinfo = new MessageEmbed();
      otherinfo.setTitle(`${mentioneduser.username}'s UserInfo`);
      otherinfo.setColor(`RANDOM`);
      otherinfo.setImage(mentioneduser.displayAvatarURL());
      otherinfo.addField("User ID", mentioneduser.id);
      otherinfo.addField("User Tag", mentioneduser.tag);
      otherinfo.addField("User Status", mentioneduser.presence.status);
      otherinfo.addField("Last Message", mentioneduser.lastMessage);
      otherinfo.addField("Bot", `${mentioneduser.bot}`, true);
      otherinfo.setFooter(`Requested by ${message.author.tag}`);
      message.channel.send(otherinfo);
    }
  },
};
