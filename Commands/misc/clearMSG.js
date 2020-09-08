const Client = require('../../structures/Client')
const UtilityEmbed = require('../../utils/UtilityEmbeds')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'clear',
    description: 'allows people to clear messages in a channel',
    category: 'misc',

    /**
     * @param {Message} message
     * @param {String[]} args
     * @param {Client} client
     */

    run: async (client, message, args) => {
        const UtilityEmbeds = new UtilityEmbed()

        //Error handlers
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return (
                message.channel.send(UtilityEmbeds.errEmbed(
                    'You do not have the permission "MANAGE_MESSAGES"',
                    `Triggered by ${message.author.tag}`
                ))
            )
        }

        if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
            return (
                message.channel.send(UtilityEmbeds.errEmbed(
                    'I dont have the permission to clear messages!',
                    `Triggered by ${message.author.tag}`
                ))
            )
        }

        if (!args[0]) {
            return (
                message.channel.send(UtilityEmbeds.errEmbed(
                    `No clear amount was provided!`,
                    `Triggered by ${message.author.tag}`
                ))
            )
        }

        if (isNaN(args[0])) {
            return (
                message.channel.send(UtilityEmbeds.errEmbed(
                    `The delete amount provided is not a number!`,
                    `Triggered by ${message.author.tag}`
                ))
            )
        }

        if (parseInt(args[0]) <= 0) {
            return (
                message.channel.send(UtilityEmbeds.errEmbed(
                    `You cannot delete 0 messages!`,
                    `Triggered by ${message.author.tag}`
                )
            )
            )
        }

        let clearedMessages = parseInt(args[0])
        
        if (clearedMessages >= 200) {
            return (
                message.channel.send(UtilityEmbeds.errEmbed(
                    `You cannot delete more than 200 messages at once!`,
                    `Triggered by ${message.author.tag}`
                ))
            )
        }

        message.channel.bulkDelete(clearedMessages)

        if (message.channel.bulkDelete) {
            message.delete()
        }

        message.channel.send(UtilityEmbeds.successEmbed(
            `Successfully deleted ${clearedMessages} messages!`,
            `Requested by ${message.author.tag}`
        ))
    }
}