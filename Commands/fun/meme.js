const { MessageEmbed, Message } = require('discord.js')
const randomPuppy = require('random-puppy')

module.exports = {
    name: 'meme',
    description: 'fetches a random meme from a subreddit',
    category: 'fun',
    
    //IntelliSense
    /**
     * @param {Message} message
     */

    run: async(client, message, args) => {
        const subReddits = [
            'meme',
            'memes'
        ]

        const randomReddit = subReddits[Math.floor(Math.random() * subReddits.length)]
        const image = await randomPuppy(randomReddit)

        
        const memeEmbed = new MessageEmbed()
        memeEmbed.setTitle(`A meme from /r/${randomReddit}`)
        memeEmbed.setImage(image)
        memeEmbed.setURL(`https://www.reddit.com/r/${randomReddit}`)
        memeEmbed.setColor(`RANDOM`)
        memeEmbed.setFooter(`Note: These memes are random memes fetched from the subreddits "meme", and "memes". Please note that some of these images might be innapropriate or offensive, as they are pulled from posts from the subreddits, and we have no way of controlling what gets sent.`)

        message.channel.send(memeEmbed)
    }
}