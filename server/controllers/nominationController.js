const express = require('express');
let router = express.Router();
const Nomination = require('../models/Nomination');

router.post('/', (req, res) => {
    
    console.log(req.body)
    const { title, description, imageUrl, created } = req.body;

    let nomination = {
        title,
        description,
        imageUrl,
        created
    }


    Nomination.create({ ...nomination })
        .then(createdNomination => {
            res.status(201).json({ _id: createdNomination._id })
        }).catch(err => {
            console.log(err);
        })

})


module.exports = router;
