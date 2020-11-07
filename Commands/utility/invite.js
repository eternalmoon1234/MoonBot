const { Message, MessageEmbed } = require("discord.js");
const Client = require("../../structures/Client");
const UtilityEmbed = require("../../utils/UtilityEmbeds");

module.exports = {
  name: "help",
  description: "the help cmd that returns all commands",
  category: "utils",

  /**
   * @param {Message} message
   * @param {Client} client
   * @param {String[]} args
   */

  run: async (client, message, args) => {
    //Init my utilityembeds class
    const UtilityEmbeds = new UtilityEmbed();

    const invite = new MessageEmbed();
    invite.setTitle("Invite Me!");
    invite.setDescription(
      "Click the link above to invite me into your server!"
    );
    invite.setURL("https://www.google.com"); //temporary link
    invite.setColor("00FF00");
    invite.setFooter(`Requested by ${message.author.tag}`);
    message.channel.send(invite);
  },
};
