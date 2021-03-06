const { Message, MessageEmbed, Util } = require("discord.js");
const UtilityEmbed = require("../../utils/UtilityEmbeds");
const Client = require("../../structures/Client");
const math = require("mathjs");

class Calc {
  startCalculator() {
    module.exports = {
      name: "calc",
      description: "allows you to do math evaluations with the math.js module",
      category: "utility",

      /**
       * @param {Message} message
       * @param {String[]} args
       * @param {Client} client
       */

      run: async (client, message, args) => {
        const UtilityEmbeds = new UtilityEmbed();
        //Error handlers
        if (!args[0]) {
          return message.channel.send(
            UtilityEmbeds.errEmbed(
              `No question was provided! Please give one.`,
              `Triggered by ${message.author.tag}`
            )
          );
        }

        let evaluated;

        //Try a block of code, and catch the error, for every other possiblity
        try {
          evaluated = math.evaluate(args.join(" "));
        } catch (err) {
          return message.channel.send(
            UtilityEmbeds.errEmbed(
              `The question formatting is wrong. Please provide a valid question.`,
              `Triggered by ${message.author.tag}`
            )
          );
        }

        const result = new MessageEmbed();
        result.setColor("4FE324");
        result.setTitle("**Calculated Result**");
        result.addField(`Question:`, `${args.join(" ")}`);
        result.addField("Answer:", `${evaluated}`);

        message.channel.send(result);
      },
    };
  }
}

const Calculator = new Calc();
Calculator.startCalculator();
