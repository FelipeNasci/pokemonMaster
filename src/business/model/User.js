const mongoose = require('mongoose');

const User = new mongoose.Schema({

    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created: { type: Date, default: Date.now },

})

module.exports = mongoose.model('User', User);