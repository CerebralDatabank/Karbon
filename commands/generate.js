const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");
const fs = require('fs');
module.exports.run = async (bot, message, args) => {

if(!ticket[message.author.username]){
      var id = Math.floor(Math.random() * 4000000) + 1000000
   ticket[message.author.username] = {
      ticketid: id
   } 
   
      console.log(ticket);

fs.writeFile('../lotteryticket.json', JSON.stringify(id), err => {
         if(err) console.log(err);
   })
   
//    var oof = ticket.tickets;
//    oof.push('["id": ${message.author.id}, "ticket": ${id}]');
//    if(ticket.tickets.id[message.author.id]) console.log('oof');
   
 
    message.reply(`**Your ticket number is: ${id}. **`);

}
   else{
    message.reply("You have already generated a ticket!");
    
    
  }

}

module.exports.help = {
  name: "generate"
}
