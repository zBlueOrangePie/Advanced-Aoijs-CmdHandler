const aoijs = require("aoi.js");
const keepAlive = require("./keepAlive/keepAlive.js");
const config = require("./config.json");
const express = require("express")

const bot = new Aoijs.Bot({
  token: config.token,// go to config.json and add your bot's token in it.
  prefix: "?", //Bot's Prefix
  intents: ["all"] // Bot's Intents
});

bot.onMessage({respondToBots: "false"});

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/");

bot.status({
  text: "?help | $serverCount",
  type: "listening",
  status: "dnd",
  time: "12"
});

bot.variables(require("./Json/variables.js"));