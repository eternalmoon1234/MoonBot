const { MessageEmbed, Message } = require('discord.js')
const Client = require('../../structures/Client')
const UtilityEmbed = require('../../utils/UtilityEmbeds')

module.exports = {
    name: 'kick',
    description: 'kick a member',
    category: 'moderation',

    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        const UtilityEmbeds = new UtilityEmbed()

        const user = message.mentions.users.first()

        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return (
                message.channel.send(UtilityEmbeds.errEmbed(
                    `You do not have the permission "KICK_MEMBERS"`,
                    `Triggered by ${message.author.tag}`
                ))
            )
        }

        if (!message.guild.me.hasPermission('KICK_MEMBERS')) {
            return (
                message.channel.send(UtilityEmbeds.errEmbed(
                    `I don't have the permission to kick!`,
                    `Triggered by ${message.author.tag}`
                ))
            )
        }

        if (!user) {
            return (
                message.channel.send(UtilityEmbeds.errEmbed(
                    'You did not mention the person you want to kick!',
                    `Triggered by ${message.author.tag}`
                ))
            )
        }

        if (user) {
            const member = message.guild.member(user)

            if (!member.guild) {
                return (
                    message.channel.send(UtilityEmbeds.errEmbed(
                        `That user is not in this guild!`,
                        `Triggered by ${message.author.tag}`
                    ))
                )
            }

            if (member.id === message.guild.me.id) {
                return (
                    message.channel.send(UtilityEmbeds.errEmbed(
                        `You cannot kick me!`,
                        `Triggered by ${message.author.tag}`
                    ))
                )
            }

            if (member.id === message.author.id) {
                return (
                    message.channel.send(UtilityEmbeds.errEmbed(
                        `You cannot yourself!`,
                        `Triggered by ${message.author.tag}`
                    ))
                )
            }

            if (member) {
                let reason = args.slice(1).join(" ")
                member.kick(reason)

                if (!reason) {
                    reason = ""
                }

                return (
                    message.channel.send(UtilityEmbeds.successEmbed(
                        `Successfully kicked the user ${user.tag}, for the reason ${reason}`
                        `User ${message.author.tag} just kicked ${user.tag}`
                    ))
                    .then(messageReaction => {
                        messageReaction.react("✅")
                    })
                )
            }
        } else {
            return message.channel.send(UtilityEmbeds.errEmbed(
                `Something went wrong. You probably tried to kick yourself, or some other problem occured`,
                `User ${message.author.tag} just kicked ${user.tag}`
            ))
        }
    }
}