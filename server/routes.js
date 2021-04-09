const express = require('express');
let router = express.Router();

const authController = require('./controllers/authController');
const nominationController = require('./controllers/nominationController');
const apiController = require('./controllers/apiController');


router.get('/', (req, res) => {
    res.json({ message: 'It is working' });
});


router.use('/api/upload', apiController)
router.use('/register', authController);
router.use('/create', nominationController);
router.use('/nominations', nominationController);

module.exports= router;