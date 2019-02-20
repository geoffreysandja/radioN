const Discord = require("discord.js");
const config = require('./Module/Config.json');
const namebot = config.name_bot
const bot = new Discord.Client({disableEveryone : true});


bot.on('ready', function () {
    console.log('bot ready')
});

bot.on('message', async message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let Args = messageArray.slice(1);
    const broadcast = bot.createVoiceBroadcast();
    if(cmd == "radioN"){
        message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
        //const dispatcher=
        //connection.playArbitraryInput(config.url_station);
        /*dispatcher.on("end", end => {
            console.log("left channel");
           // voiceChannel.leave();
        });*/
        //console.log(connection);
        //console.log('Successfully Connected');
        broadcast.on('subscribe', dispatcher => {
            console.log('New broadcast subscriber!');
          });
          
          broadcast.on('unsubscribe', dispatcher => {
            console.log('Channel unsubscribed from broadcast :(');
          });
          const dispatcher = broadcast.play(config.url_station);

          connection.play(broadcast);
         message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
        } else {
            if(message.author.id == "545987625555722241"){ return; }
            
          message.reply('You need to join a voice channel first!');
        }
    


});

bot.login(config.token);
