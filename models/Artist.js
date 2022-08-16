const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


Artist.init(
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
        awards: {
          type: DataTypes.STRING,
          allowNull: true,

        },
        albumsSold: {
          type: DataTypes.STRING,
          allowNull: true, 

        },
        singlesSold: {
          type: DataTypes.STRING,
          allowNull: true,
        
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