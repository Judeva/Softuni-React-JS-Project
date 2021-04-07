const router = require('express').Router();

const authController = require('./controllers/authController');
const nominationController = require('./controllers/nominationController');

router.use('/auth', authController);
router.use('/create', nominationController);

module.exports= router;