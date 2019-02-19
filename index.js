const Discord = require("discord.js");
const config = require('./Module/Config.json');
const namebot = config.name_bot
const bot = new Discord.Client({disableEveryone : true});


bot.on('ready', function () {
    console.log('bot ready')
});

bot.on('message', async message => {
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let Args = messageArray.slice(1)

    if(cmd == "radioN"){
        message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
        connection.playArbitraryInput(config.url_station);
        console.log(connection);
        console.log('Successfully Connected');
         message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
        } else {
            if(message.author.id == "545987625555722241"){ return; }
          message.reply('You need to join a voice channel first!');
        }
    


});

bot.login(config.token);
