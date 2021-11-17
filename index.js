var linebot = require('linebot');
 
var bot = linebot({
  channelId: CHANNEL_ID,
  channelSecret: CHANNEL_SECRET,
  channelAccessToken: CHANNEL_ACCESS_TOKEN
});
 

bot.on('message',      function (event) {
    event.reply(event.message.text).then(function (data) {
      // success
    }).catch(function (error) {
      // error
    });
  });

bot.on('follow',       function (event) { });
bot.on('unfollow',     function (event) { });
bot.on('join',         function (event) { });
bot.on('leave',        function (event) { });
bot.on('memberJoined', function (event) { });
bot.on('memberLeft',   function (event) { });
bot.on('postback',     function (event) { });
bot.on('beacon',       function (event) { });

bot.listen('/linewebhook', 3000);