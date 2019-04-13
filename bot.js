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
  
  client.login(process.env.B0T_T0KEN);

const Discord = require("discord.js");
const client = new Discord.Client;

client.on('ready', () => {
console.log('I am ready!');
});

client.on("message", message => {
  if(message.content == "Ding"){
    message.reply("Dong");
    
  }
  });
  
  client.login(process.env.B0T_T0KEN);
