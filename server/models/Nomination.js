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

    // likes: Number,

    created: {
        type: String,
        required: true
    },

    // creator: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User'
    // }

});


module.exports = mongoose.model('Nomination', nominationSchema);