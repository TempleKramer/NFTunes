const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Artist extends Model {}

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
        // genre_id: {
        //     type: DataTypes.STRING,
        //     references: {
        //       model: 'genre',
        //       key: 'id'
        //     }
        //   }
    },  
    {

        sequelize,
        freezeTableName: true,
        underscored: true,

      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'genre',

    }
)

module.exports = Artist