require("dotenv").config();

const config = {
  PORT: process.env.PORT || 7000,
  DB_CONN: `mongodb+srv://organicUser:${process.env.DB_CONN}@cluster0.tibcl.mongodb.net/LogicLarkPosSecurity`,
};

module.exports = config;
