const Client = require('../../structures/Client')
const { Message, MessageEmbed } = require('discord.js')
const UtilityEmbed = require('../../utils/UtilityEmbeds')

module.exports = {
    name: 'slowmode',
    description: 'sets the slowmode of the channel',
    category: 'utility',

    /**
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        const UtilityEmbeds = new UtilityEmbed()

        //Error handlers
        if (!message.member.hasPermission('MANAGE_CHANNELS')) {
            return (
                message.channel.send(UtilityEmbeds.errEmbed(
                    'You do not have the permission "MANAGE_CHANNELS"',
                    `Triggered by ${message.author.tag}`
                ))
            )
        }

        if (!args[0]) {
            return (
                message.channel.send(UtilityEmbeds.errEmbed(
                    'No slowmode time was provided (in seconds)'
                ))
            )
        }

        //IF it's not a number...
        if (isNaN(args[0])) {
            return (
                message.channel.send(UtilityEmbeds.errEmbed(
                    'The slowmode time provided is not a number!'
                ))
            )
        }

        if (args[0] == '0') {
            message.channel.setRateLimitPerUser(0)
            return (
                message.channel.send(UtilityEmbeds.successEmbed(
                    `Successfully reset the slowmode of the channel!`,
                    `Requested by ${message.author.tag}`
                ))
            )
        }

        message.channel.setRateLimitPerUser(args[0])
        message.channel.send(
            UtilityEmbeds.successEmbed(
                `Slowmode of the channel was successfully set to ${args[0]} seconds!`,
                `Requested by ${message.author.tag}`
            )
        )
    }
}