const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const privacy = new Schema({

    description: {
        type: String,
    }

}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })
var Privacy = mongoose.model('Privacy', privacy)
module.exports = Privacy