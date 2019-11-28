const mongoose = require('mongoose');

const Pokemon = new mongoose.Schema({
    name: String,
    attack: Number,
    defence: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})

module.exports = mongoose.model('Pokemon', Pokemon);