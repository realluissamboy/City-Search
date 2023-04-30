const Sequelize = require('sequelize')
const db = require('../db')

const Home = db.define(
  'home',
  {
    statename: {
      type: Sequelize.STRING,
    },
    regionname: {
      type: Sequelize.STRING,
    },
    homevalues: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = Home
