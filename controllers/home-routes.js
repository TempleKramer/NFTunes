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
          name: 'Kings of Leon',
          image: "./images/Profiles/Kings of Leon-Profile.jpg",
          awards:'Grammy: 4, Brit Awards: 2, MTV Europe Awards: 12',
          Albums_Sold: 'Over 21 million Albums',
          Singles_Sold: 'Over 38 million Singles',
          genre_id: 1,
          filename: ''
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
