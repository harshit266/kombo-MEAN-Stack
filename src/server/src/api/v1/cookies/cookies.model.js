const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cookies = new Schema({

    description: {
        type: String,
    }

}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })

var Cookies = mongoose.model('Cookies', cookies);
module.exports = Cookies;