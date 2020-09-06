//An Object-Oriented utility class for holding key embeds, that will be used over and over again
const { MessageEmbed, Message, Client, } = require('discord.js')

class UtilityEmbeds {
    constructor() {

    }
    
    errEmbed(description, footer) {
        const errorEmbed = new MessageEmbed()
        errorEmbed.setTitle('❌ Critical Error! ❌')
        errorEmbed.setDescription(description)
        errorEmbed.setColor('ff0000')
        errorEmbed.setFooter(footer)

        return (
            errorEmbed
        )
    } 
}

module.exports = UtilityEmbeds;


