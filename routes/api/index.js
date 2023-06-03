const router = require('express').Router();
// bvhdfarjklbl
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes')

// bvchrfeDIJSL
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;