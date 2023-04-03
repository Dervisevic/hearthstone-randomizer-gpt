const express = require("express");
const WebSocket = require("ws");
const app = express();
const server = require("http").createServer(app);
const wss = new WebSocket.Server({ server });

const classes = [
  { name: "Death Knight", image: "dk.png" },
  { name: "Deamon Hunter", image: "dh.png" },
  { name: "Druid", image: "druid.png" },
  { name: "Hunter", image: "hunter.png" },
  { name: "Mage", image: "mage.png" },
  { name: "Paladin", image: "paladin.png" },
  { name: "Priest", image: "priest.png" },
  { name: "Rogue", image: "rogue.png" },
  { name: "Shaman", image: "shaman.png" },
  { name: "Warlock", image: "Warlock.png" },
  { name: "Warrior", image: "Warrior.png" },
];

const players = [
  { name: "Player1", className: "", classImage: "" },
  { name: "Player2", className: "", classImage: "" },
];

wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.on("message", (message) => {
    const data = JSON.parse(message);
    if (data.type === "randomize") {
      players.forEach((player) => {
        const randomClass = classes[Math.floor(Math.random() * classes.length)];
        player.className = randomClass.name;
        player.classImage = randomClass.image;
      });
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(players));
        }
      });
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
