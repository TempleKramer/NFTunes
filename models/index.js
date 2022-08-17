const User = require('./User');
const Genre = require('./Genre');
const Artist = require('./Artist');

Genre.hasMany(Artist, {
  foreignKey: 'genre_id',
});

Artist.belongsTo(Genre, {
  foreignKey: 'genre_id',
});

module.exports = { User, Genre, Artist };