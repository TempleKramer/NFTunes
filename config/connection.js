const Sequelize = require('sequelize');
// require('dotenv').config();

const sequelize = new Sequelize('NFTunes_db', 'root', 'qwqw', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

module.exports = sequelize;