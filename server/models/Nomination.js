const mongoose = require('mongoose');

const nominationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required:true,

    },

    imageUrl:
    {
        type: String,
        required: true,
    },

    likes: [],

    created: {
        type: Date,
        required: true
    },

    creator: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model('Nomination', nominationSchema);