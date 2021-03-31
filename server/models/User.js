const mongoose = require('mongoose');
const { SALT_ROUNDS} = require('../config/config');
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

});

serScheme.pre('save', function (next) {

    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => {
            this.password = hash;
            next();
        });
});

userSchema.methods = {
    matchPassword: function (password) {
        return password === this.password;
    }
}

module.exports= mongoose.model('User', userSchema);