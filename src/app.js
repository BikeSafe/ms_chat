const sockerIO = require("socket.io");
const express = require("express");
const morgan = require("morgan");

const config = require("./config");

const app = express();

// Settings
app.set("port", config.PORT);

// Middlewares
app.use(morgan("tiny"));
app.use(express.json());

// Start server
const server = app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

const io = sockerIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', () =>{
  console.log("new Connection");
})

module.exports = app;