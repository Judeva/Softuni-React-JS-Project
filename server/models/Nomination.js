const mongoose = require('mongoose');

const nominationSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        required: true
    },
    category: String,

    imageUrl:
    {
        type: String,
        require: true,
    },
    
    likes: Number,

    creationDate: {
        type: Date,
        required: true
    },

    creator: {
        type: mongoose.Types.ObjectId,
        ref: User
    }

});


module.exports = mongoose.model('Nomination', nominationSchema);