const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userschema = new Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },

    bank_statement: {
        type: String
    },
    category: {
        type: String
    },
    number: {
        type: Number
    },
    is_active: {
        type: Boolean
    }



}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })


var user = mongoose.model('User', userschema)

module.exports = user;