const { MessageEmbed, Message, Discord } = require('discord.js')
const UtilityEmbed = require('../../utils/UtilityEmbeds')

module.exports = {
    name: 'poll',
    description: "creates a simple poll",
    category: 'misc',

    //IntelliSense
    /**
     * @param {Message} message
     * @param {String[]} args
     */
    
    run: async (client, message, args) => {
        //Embeds
        const UtilEmbeds = new UtilityEmbed()
        
        if (message.member.hasPermission('ADMINISTRATOR')) {
            return (
                message.channel.send(UtilEmbeds.errEmbed(
                    'You do not have the permission "ADMINISTRATOR"', 
                     
                ))
            )
        }
    }
}

