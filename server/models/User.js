const mongoose = require('mongoose');
const { SALT_ROUNDS } = require('../config/config');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    nominations: [{
        type: mongoose.Types.ObjectId,
        ref: 'Nomination'
    }],

});

userSchema.methods = {
    matchPassword: function (password) {
        return password === this.password;
    }
}

userScheme.pre('save', function (next) {

    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => {
            this.password = hash;
            next();
        });
});



module.exports = mongoose.model('User', userSchema);