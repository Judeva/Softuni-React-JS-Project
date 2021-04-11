const mongoose = require('mongoose');

const nominationSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,

    },

    imageUrl:
    {
        type: String,
        require: true,
    },

    likes: {
        type: Number,
        default:0
    },

    created: {
        type: Date,
        // required: true
    },

    creator: {
        type: String,
        require: true,
    }
});


module.exports = mongoose.model('Nomination', nominationSchema);