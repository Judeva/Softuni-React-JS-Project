const router = require('express').Router();
const Nomination = require('../models/Nomination');

router.post('/create', (req, res)=>{

    let nomination = new Nomination(req.body);
    nomination.save()
    .then(createdNomination=>{
        res.status(201).json({_id: createdNomination._id})
    })

    res.json({ok: true});
})

module.exports= router;
