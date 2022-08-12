const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


Genre.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'genre',
    }
)

module.exports = Genre