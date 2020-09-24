const { MessageEmbed, Message, Client } = require('discord.js')
const UtilityEmbed = require('../../utils/UtilityEmbeds')
const { prefix } = require('../../config.json')

module.exports = {
    name: 'poll',
    description: "creates a simple poll",
    category: 'misc',

    //IntelliSense
    /**
     * @param {Message} message
     * @param {String[]} args
     * @param {Client} client
     */
    
    run: async (client, message, args) => {
        //Create an instance of the UtilityEmbed Class
        const UtilEmbeds = new UtilityEmbed()
        client.ws.pi
        //Error Handlers
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            return (
                message.channel.send(UtilEmbeds.errEmbed(
                    `You do not have the permission, "ADMINISTRATOR"`,
                    `Triggered by ${message.author.tag}`
                ))
            )
        }

        const chosenCHNL = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])

        if (!chosenCHNL) {
            return (
                message.channel.send(UtilEmbeds.errEmbed(
                    'The channel name, or channel ID to create the poll was not provided',
                    `Triggered by ${message.author.tag}`
                ))
            )
        }

        let pollContent = message.content.split(`${prefix}poll ${chosenCHNL}`).join("")

        if (!pollContent) {
            return (
                message.channel.send(UtilEmbeds.errEmbed(
                    'The poll content was not provided!',
                    `Triggered by ${message.author.tag}`
                ))
            )
        }

        const pollEmbed = new MessageEmbed()
        pollEmbed.setTitle("Poll: ")
        pollEmbed.setDescription(pollContent)
        pollEmbed.setColor('A344CD')
        pollEmbed.setFooter(`Poll created by ${message.author.tag}`)

        let channel = await client.channels.cache.get(chosenCHNL.id).send(pollEmbed)
        await channel.react("👍")
        await channel.react("👎")
    }
}

