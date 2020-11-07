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
    const help = new MessageEmbed();
    help.setTitle("✉️ Help ✉️");
    help.setDescription("You requested help. Here are all the commands.");
    help.setColor("6107F5");
    help.addFields(
      {
        name: "🏓 Ping Command 🏓",
        value: "**Command: >ping** | Gives the bot's latency",
        inline: true,
      },
      {
        name: "🎱 8ball Command 🎱",
        value: "**Command: >ping** |",
        inline: true,
      },
      {
        name: "💬 Speak Command 💬",
        value:
          "**Command: >speak** | Get the bot to speak whatever you want it to! The words after the command are what the bot will say!",
        inline: true,
      },
      {
        name: "🎲 Roll! 🎲",
        value:
          "**Command: >roll** | Returns a number between 1 and 6, like rolling a dice.",
        inline: true,
      },
      {
        name: "💰 Flip 💰",
        value:
          "**Command: >flip** | Returns either heads or tails, like a coin toss.",
        inline: true,
      },
      {
        name: "🖼️ Avatar Command 🖼️",
        value:
          "**Command: >avatar (Optional Mention Arguments)** | Returns your avatar, and you can also find someone else's avatar by mentioning them.",
        inline: true,
      }
    );
    help.addFields({
      name: "📝 Poll Command 📝",
      value:
        "**Admin Command: >poll** | Makes an embed for a poll and reacts with a thumbsup and thumbsdown.",
    });
    help.setFooter(`Help requested by ${message.author.tag}`);
    message.author.send(help);
    const servermessage = new MessageEmbed();
    servermessage.setTitle("✉️ Help Sent! ✉️");
    servermessage.setDescription("A help message was sent to your DMs.");
    servermessage.addField("Was No Message Sent?", "**Common Problems:**");
    servermessage.addFields(
      {
        name: "Your DMs Are Closed.",
        value:
          "This is the most common problem. Make sure your DMs are turned on, so the bot is able to DM you.",
      },
      {
        name: "Permission Error",
        value:
          "This is another possible problem, where I don't have the permission to DM you.",
      },
      {
        name: "Still Got Problems?",
        value:
          "If the bot still doesn't DM you, or you get any problems, please join our support server at https://discord.com/invite/supportserver",
      }
    );
    servermessage.setColor("6107F5");
    servermessage.setFooter(`Message triggered by ${message.author.tag}`);
    message.channel.send(servermessage);
  },
};
