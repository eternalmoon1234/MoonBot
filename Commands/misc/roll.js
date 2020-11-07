const { MessageEmbed, Message } = require("discord.js");
const Client = require("../../structures/Client");

module.exports = {
  name: "roll",
  description: "rolls a die",
  category: "misc",

  //IntelliSense
  /**
   * @param {Message} message
   * @param {Client} client
   * @param {String[]} args
   */

  run: async (client, message, args) => {
    const randomRoll = Math.floor(Math.random() * 6) + 1;
    const roll = new MessageEmbed();
    roll.setTitle("Roll!");
    roll.setDescription(`The dice rolled ${randomRoll}`);
    roll.setColor("C83838");
    roll.setFooter(`Requested by ${client.user.tag}`);
    message.channel.send(roll);
  },
};
