const Client = require('../../structures/Client')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'returns the websocket ping, and message edit ping',
    category: 'misc',
    aliases: ['pong'],

    //IntelliSense
    /**
     * @param {Message} message
     * @param {Client} client
     */

    run: async(client, message, args) => {
        const msg = await message.channel.send('🏓 Pinging... 🏓')
        //Create an embed by making an instance of the MessageEmbed class, + set properties
        const ping = new MessageEmbed()
        ping.setTitle('🏓 Pong! 🏓')
        ping.setDescription(`WebSocket Ping: ${client.ws.ping} MS | Edit Ping: ${msg.createdAt - message.createdAt} MS`)
        ping.setColor(`4CCD44`)
        ping.setFooter(`Requested by ${message.author.tag}`)
        //Using the await function to use a var we can use again
        await msg.edit(ping)
        await msg.edit("🏓 Pong! 🏓")
    }
}