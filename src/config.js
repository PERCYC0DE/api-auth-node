require("dotenv").config();

const config = {
  SECRET: process.env.SECRET,
  dbHost: process.env.DB_HOST,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbDatabase: process.env.DB_DATABASE,
};

module.exports = { config };
