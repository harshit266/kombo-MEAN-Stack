const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const terms = new Schema({

    description: {
        type: String,
    }

}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })

var Terms = mongoose.model('Terms', terms)
module.exports = Terms;