const { Artist } = require('../models')

const artistData = [
    {
        name: 'Kings of Leon',
        image: "./images/Profiles/Kings of Leon-Profile.jpg",
        awards:'Grammy: 4, Brit Awards: 2, MTV Europe Awards: 12',
        Albums_Sold: 'Over 21 million Albums',
        Singles_Sold: 'Over 38 million Singles',
        genre_id: 1,
        filename: ''
    },
    {
        name: 'Shawn Mendes',
        image: "./images/Profiles/Shawn-Mendes_Profile.jpg",
        awards:'Grammy: 3 nominations, Juno Awards: 13, MTV Europe Awards: 11 ',
        Albums_Sold: 'Over 20 million Albums',
        Singles_Sold: 'Over 175 million Singles',
        genre_id: 2,
        filename: href="google.com"
    },
    {
        name: 'Lil Pump',
        image: "./images/Profiles/Lil Pump-Profile.jpg",
        awards:'none',
        Albums_Sold: 'Over 1 million Albums',
        Singles_Sold: 'Null',
        genre_id: 3,
        filename: ''
    },
];

const seedArtist = () => Artist.bulkCreate(artistData);

module.exports = seedArtist;

