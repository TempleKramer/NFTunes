const sequelize = require('../config/connection');
const seedGenre = require('./genreData');
const seedArtist = require('./artistData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGenre();

  await seedArtist();

  process.exit(0);
};

seedAll();