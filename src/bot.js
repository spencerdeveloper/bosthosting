const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
require('dotenv').config();


client.on('ready', () => {
    console.log('Ready');
});

(async () => {
    client.login(process.env.token);
})();

let axios = require("axios")
let express = require("express")
let url = "https://hosting-24hrs-bot.herokuapp.com/"

async function createWebServer() {
    var app = express();
    app.get("*", function (req, res) {
        res.json({
            success: true
        });
    });
    //Setup Server
    app.listen(process.env.PORT || 5000, function () {
        console.log("https://hosting-24hrs-bot.herokuapp.com/", process.env.PORT || 5000);
    });
    //Keep Awake
    setInterval(function () {
        axios.get(url);
    }, 300000); //5 minute because I know you will forget
}

createWebServer()
