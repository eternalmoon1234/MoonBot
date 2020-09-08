//An Object-Oriented utility class for holding key embeds, that will be used over and over again
const { MessageEmbed, Message, Client, } = require('discord.js')

class UtilityEmbeds {
    constructor() {

    }
    
    errEmbed(description, footer, title) {
        const errorEmbed = new MessageEmbed()
        errorEmbed.setTitle('❌ Error! ❌' || title)
        errorEmbed.setDescription(description)
        errorEmbed.setColor('ff0000')
        errorEmbed.setFooter(footer)

        return (
            errorEmbed
        )
    } 

    successEmbed(description, footer, title) {
        const success = new MessageEmbed()
        success.setTitle('✅ Success! ✅' || title)
        success.setDescription(description)
        success.setColor('4FE324')
        success.setFooter(footer)

        return (
            success
        )
    }
}

module.exports = UtilityEmbeds;


