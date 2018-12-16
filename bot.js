const Discord = require("discord.js");
const client = new Discord.Client;

client.on('ready', () => {
console.log('I am ready!');
});

client.on("message", message => {
  if(message.content == "ping"){
    message.reply("Pong");
    
  }
  });
  
  client.login("NTIzNzM3NzgyMDExNTU5OTM2.Dvd5QQ.3ZUGx77vXipMmdbYgJ-SYOG32gA");
