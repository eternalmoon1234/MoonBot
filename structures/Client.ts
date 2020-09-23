const { Collection, Client } = require('discord.js')
const { token, prefix } = require('../config.json')

class BotClient extends Client {
    constructor() {
        super()

        //Create Collection data structures
        this.commands = new Collection()
        this.structures = new Collection()

        //Require Modules
        this.fs = require('fs')
        this.Discord = require('discord.js')
        this.path = require('path')
    }

    //Functions of the class
    commandHandler() {
        this.fs.readdirSync('./Commands').map((directory: any) => {
            this.fs.readdirSync(`./Commands/${directory}/`).map((cmd: any) => {
                let CMD = require(`../Commands/${directory}/${cmd}`)
                console.log(`Command ${CMD.name} loaded`)
                
                this.commands.set(CMD.name, CMD)
            })
        })
    }

    initBot() {
        this.commandHandler()

        //Ready event listener
        this.on('ready', async () => {
            console.log(`Client connected as ${this.user.tag}`)
        })

        //Message event listener
        this.on('message', async(message: any) => {
            //If the message comes from another bot, then return
            if (message.author.bot || !message.content.startsWith(prefix)) {
                return;
            }
            //Variable for args
            const args = message.content.slice(prefix.length).trim().split(/ +/)
            const lower = args.shift().toLowerCase()

            //Navigate the collection, get, and run
            if (this.commands.has(lower)) {
                const commandFiles = this.commands.get(lower)
                //Run files in directories
                commandFiles.run(this, message, args)
            }
        })

        //Login
        this.login(token)
    }
}

//Export the class
module.exports = BotClient;