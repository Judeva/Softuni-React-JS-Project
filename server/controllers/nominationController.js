const { response } = require('express');
const express = require('express');
let router = express.Router();
const Nomination = require('../models/Nomination');
const nominationService = require('../services/nominationService');


router.post('/', (req, res) => {


    const { title, description, imageUrl, created, creator } = req.body;

    let nomination = {
        title,
        description,
        imageUrl,
        created,
        creator
    }


    Nomination.create({ ...nomination })
        .then(createdNomination => {
            res.status(201).json({ _id: createdNomination._id })
        }).catch(err => {
            console.log(err);
        })

});

router.get('/', (req, res) => {
    nominationService.getAll()
        .then(data => {
            res.send(data);
        })
});

router.get('/:id', (req, res) => {
    
    console.log(req.params.id);
    Nomination.findById({ _id: req.params.id })
    .then(data=>{
        res.send(data)
    })
    .catch(err=>console.log(err));
});


module.exports = router;
