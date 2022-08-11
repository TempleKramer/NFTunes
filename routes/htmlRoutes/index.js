const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/genres', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/genres.html'));
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
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;