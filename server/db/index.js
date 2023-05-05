//this is the access point for all things database related!

const db = require("./db");

const Home = require("./models/Home");

//associations could go here!

module.exports = {
  db,
  models: {
    Home,
  },
};
