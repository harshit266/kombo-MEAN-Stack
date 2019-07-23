const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const privacy = new Schema({

    description: {
        type: String,
    },
    is_active :{
        type:Boolean
    }

}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })
var Privacy = mongoose.model('Privacy', privacy)
module.exports = Privacy