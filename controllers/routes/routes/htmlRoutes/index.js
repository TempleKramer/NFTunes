// for Inez to merge with handlebars

const path = require('path');
const router = require('express').Router();
const artist = require

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/layouts/main.handlebars'));
});

router.get('/genres', (req, res) => {
  res.sendFile(path.join(__dirname, ''));
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

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/layouts/main.handlebars'));
});

module.exports = router;