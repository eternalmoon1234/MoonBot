const { MessageEmbed, Message } = require("discord.js")
const Client = require('../../structures/Client')
const client = new Client()
module.exports = {
    name: 'avatar',
    description: 'returns the avatar',
    category: "misc",
    
    //IntelliSense
    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */

    run: async(client, message, args) => {
        let mentioneduser = message.mentions.users.first()
        
        //Your avatar
        if (!mentioneduser) {
            const youravatar = new MessageEmbed()
            youravatar.setTitle('Your Avatar')
            youravatar.setColor(`RANDOM`)
            youravatar.setThumbnail(message.author.displayAvatarURL())
            youravatar.setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(youravatar)
        } else {
            const mentionavatar = new MessageEmbed()
            mentionavatar.setTitle(`${mentioneduser.username}'s Avatar`)
            mentionavatar.setThumbnail(mentioneduser.displayAvatarURL())
            mentionavatar.setColor(`RANDOM`)
            mentionavatar.setFooter(`Requested by ${message.author.tag}`)
            message.channel.send(mentionavatar)
        }
        
    }
}