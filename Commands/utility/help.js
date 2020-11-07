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
        value:
          "**Command: >ping** | Gives the bot's latency, and the Discord API ping",
        inline: true,
      },
      {
        name: "🎱 8ball Command 🎱",
        value:
          "**Command: >8ball <question>** | Ask the 8ball anything you want!",
        inline: true,
      },
      {
        name: "🎲 Roll! 🎲",
        value:
          "**Command: >roll** | Returns a number between 1 and 6, like rolling a dice.",
        inline: true,
      },
      {
        name: "🖼️ Avatar Command 🖼️",
        value:
          "**Command: >avatar <user>** | Returns your avatar, and you can also find someone else's avatar by mentioning them.",
        inline: true,
      },
      {
        name: "🧮 Calculator Command 🧮",
        value: "**Command** >calc <equation> | Calculates your math equations",
        inline: true,
      },
      {
        name: "✉️ Invite Command ✉️",
        value: "**Command** >invite | Provides the bot's invite link",
        inline: true,
      },
      {
        name: "ℹ️ Userinfo Command ℹ️",
        value:
          "**Command** >userinfo <user> | Provides the information of a mentioned user",
        inline: true,
      },
      {
        name: "🤣 Meme Command 🤣",
        value: "**Command** >meme | Fetches a meme from a random subreddit",
        inline: true,
      }
    );
    help.addFields(
      {
        name: "📝 Poll Command 📝",
        value:
          "**Admin Command: >poll <channel> <content>** | Makes an embed for a poll and reacts with a thumbsup and thumbsdown.",
      },
      {
        name: "🐢 Slowmode Command 🐢",
        value:
          "**Admin Command: >slowmode <seconds>** | Sets the slowmode of the channel in seconds",
      },
      {
        name: "👋 Kick Command 👋",
        value: "**Admin Command: >kick <user>** | Kicks the mentioned user",
      },
      {
        name: "🗑️ Clear Command 🗑️",
        value:
          "**Admin Command: >clear <>** | Clears the requested amount of messages",
      }
    );
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
