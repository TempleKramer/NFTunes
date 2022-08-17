const router = require('express').Router();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;