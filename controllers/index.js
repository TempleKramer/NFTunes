const router = require('express').Router();

const homeRoutes = require('./home-routes.js')
const apiRoutes = require('./routes/apiRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;