
const Discord = require("discord.js");
let ticket = require("../lotteryticket.json");
const fs = require('fs');
module.exports.run = async (bot, message, args) => {
      var id = Math.floor(Math.random() * 99) + 1

if(!ticket[message.author.id]){
   ticket[message.author.id] = {
      ticketid: id
   } 
fs.writeFile('../lotteryticket.json', JSON.stringify(id), err => {
         if(err) console.log(err);
   })
  
 
    message.reply(`**Your ticket number is: ${id}. **`);

}
   else{
    message.reply("You have already generated a ticket!");
    
    
  }
     
}

module.exports.help = {
  name: "generate"
}
