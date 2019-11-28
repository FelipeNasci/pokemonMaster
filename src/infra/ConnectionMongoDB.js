const mongoose = require('mongoose');

const { url } = require('../config/mongoConfig.json');
const { options } = require('../config/mongoConfig.json');

mongoose.connect(url, options);

let mongodb = undefined;

try {
    mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'connection error:'));
    mongodb.once('open', function() {
        console.log('MongoDB Connected');
    });
} catch (err) {
    console.log('deu ruim ' + err);
}

module.exports = mongodb;