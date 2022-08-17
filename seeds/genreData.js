const { Genre } = require('../models')

const genreData = [
    {
        name: 'Rock'
    },
    {
        name: 'Pop'
    },
    {
        name: 'Rap'
    }
]

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;