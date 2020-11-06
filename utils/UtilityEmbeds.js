//An Object-Oriented utility class for holding key embeds, that will be used over and over again
const { MessageEmbed } = require("discord.js");
class UtilityEmbeds {
  errEmbed(description, footer) {
    const errorEmbed = new MessageEmbed();
    errorEmbed.setTitle("❌ Error! ❌");
    errorEmbed.setDescription(description);
    errorEmbed.setColor("ff0000");
    errorEmbed.setFooter(footer);

    return errorEmbed;
  }

  successEmbed(description, footer) {
    const success = new MessageEmbed();
    success.setTitle("✅ Success! ✅");
    success.setDescription(description);
    success.setColor("4FE324");
    success.setFooter(footer);

    return success;
  }
}

module.exports = UtilityEmbeds;
