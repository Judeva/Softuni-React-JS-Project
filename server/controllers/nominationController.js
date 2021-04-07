const express = require('express');
let router = express.Router();
const Nomination = require('../models/Nomination');

router.post('/', (req, res)=>{

    console.log(req.body)
    console.log('hello from nominationController')
    const {title, description,imageUrl, created} = req.body;

    let nomination= {
        title,
        description,
        imageUrl,
        created
    }
    
    Nomination.create({...nomination})
    .then(createdNomination=>{
        res.status(201).json({_id: createdNomination._id})
    }).catch(err=>{
        console.log(err);
    })

    res.json({ok: true});
})

module.exports= router;
