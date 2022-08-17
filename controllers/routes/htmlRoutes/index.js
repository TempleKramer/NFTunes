const path = require('path');
const Artist = require('../../../models/Artist');
const Genre = require('../../../models/Genre')
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/profile', async (req, res) => {
  const allArtists = await Artist.getAll()
  res.render('profile', { allArtists })

});

router.get('/genres', (req, res) => {
  res.sendFile(path.join(__dirname, ''))
});

router.get('/pop-artists', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/pop-artists.html'));
});
router.get('/rap-artists', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/rap-artists.html'));
});
router.get('/rock-artists', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/rock-artists.html'));
});

router.get('/login', (req, res) => {
  res.render('login');
})

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/layouts/main.handlebars'));
});

module.exports = router;