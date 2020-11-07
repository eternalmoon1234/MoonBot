const { Message, MessageEmbed } = require("discord.js");
const Client = require("../../structures/Client");
const UtilityEmbed = require("../../utils/UtilityEmbeds");

module.exports = {
  name: "invite",
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
    invite.setURL(
      "https://discord.com/api/oauth2/authorize?client_id=737093877256683639&permissions=2147352311&scope=bot"
    ); //temporary link
    invite.setColor("00FF00");
    invite.setFooter(`Requested by ${message.author.tag}`);
    message.channel.send(invite);
  },
};
