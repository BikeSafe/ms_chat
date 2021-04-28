const { config } = require("dotenv");
config();

const urlAtlas = "mongodb+srv://gtzambranop:pass123@cluster0.gmx3x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || urlAtlas,
  PORT: process.env.PORT || 4008,
  SECRET: "bikesafe",
};