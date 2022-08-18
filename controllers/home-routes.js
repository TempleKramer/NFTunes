const router = require('express').Router();
const sequelize = require('../config/connection');
const { Genre, Artist } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');


router.get('/', async (req, res) =>

    await Genre.findAll()
    .then(dbGenreData => {
      console.log(dbGenreData[0])
      res.render('homepage', dbGenreData[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    }))

    router.get('/pop-artists', async (req, res) => 

      await Artist.findAll()
      .then(ArtistData => {
        console.log(ArtistData)
        res.render('pop-artists', {
          name: 'Shawn Mendes',
          image: './images/Profiles/Shawn-Mendes-Profile.jpg',
          awards:'Grammy: 3 nominations, Juno Awards: 13, MTV Europe Awards: 11 ',
          Albums_Sold: 'Over 20 million Albums',
          Singles_Sold: 'Over 175 million Singles',
          genre_id: 2,
          filename: href="google.com"
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      }))
    router.get('/rap-artists', async (req, res) => 

      await Artist.findAll()
      .then(ArtistData => {
        console.log(ArtistData)
        res.render('rap-artists', {
          name: 'Lil Pump',
          awards:'Null',
          Albums_Sold: 'Over 1 million Albums',
          Singles_Sold: 'Null',
          genre_id: 3,
          filename: ''
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      }))
    router.get('/rock-artists', async (req, res) => 

      await Artist.findAll()
      .then(ArtistData => {
        console.log(ArtistData)
        res.render('pop-artists', {
          name: 'Shawn Mendes',
          image: './images/Profiles/Shawn-Mendes-Profile.jpg',
          awards:'Grammy: 3 nominations, Juno Awards: 13, MTV Europe Awards: 11 ',
          Albums_Sold: 'Over 20 million Albums',
          Singles_Sold: 'Over 175 million Singles',
          genre_id: 2,
          filename: href="google.com"
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      }))
//     const genres = dbGenreData.map((artist) =>
//       genres.get({ plain: true })
//     );

//     res.render('homepage', {
//       genres,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/genre/:id', withAuth, async (req, res) => {
//   try {
//     const dbGenreData = await Genre.findByPk(req.params.id, {
//       include: [
//         {
//           model: Artist,
//           attributes: [
//             'name',
//             'image',
//             'awards',
//             'genre_id',
//             'filename',
//           ],
//         },
//       ],
//     });

//     const genre = dbGenreData.get({ plain: true });
//     res.render('genre', { genre, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get('/artist/:id', withAuth, async (req, res) => {
//   try {
//     const dbArtistData = await Artist.findByPk(req.params.id);

//     const artist = dbArtistData.get({ plain: true });

//     res.render('artist', { artist, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
