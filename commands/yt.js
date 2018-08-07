const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var search = require('youtube-search');
 
    var opts = {
      maxResults: 1,
      key: process.env.ytkey
    };
    let nm = message.toString().replace(process.env.prefix + 'yt ','')
    search(nm, opts, function(err, results) {
      if(err) return console.log(err);
      console.dir(results);
      message.channel.send(':movie_camera: ***' + results[0].title + '*** - ' + results[0].channelTitle + '\n' + results[0].link).catch(console.error);
    });
}
