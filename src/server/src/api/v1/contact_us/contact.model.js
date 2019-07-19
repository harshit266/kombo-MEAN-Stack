const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const contact = new Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },

    number: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    },
    reply :{
        type :String
    },
    is_active: {
        type: Boolean
    }



}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })


var Contact = mongoose.model('Contact', contact)

module.exports = Contact;