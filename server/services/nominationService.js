const Nomination = require('../models/Nomination');

const getAll = () =>   Nomination.find({}).lean();

module.exports= {
    getAll
}