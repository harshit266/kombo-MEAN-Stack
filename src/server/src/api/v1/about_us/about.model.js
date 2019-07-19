const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const about = new Schema({

    description: {
        type: String,
    }

}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })


var About  = mongoose.model('About', about)
module.exports = About;