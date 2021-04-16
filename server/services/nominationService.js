const Nomination = require('../models/Nomination');

const getAll = () =>   Nomination.find({}).lean();
const getOne = () =>   Nomination.find({_id}).lean();

module.exports= {
    getAll,
    getOne
}