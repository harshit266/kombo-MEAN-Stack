const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const about = new Schema({

    description: {
        type: String,
    },
    is_active :{
        type :Boolean
    }

}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })


var About  = mongoose.model('About', about)
module.exports = About;