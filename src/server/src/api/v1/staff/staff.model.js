const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const staff = new Schema({

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
    staff_id :{
        type:String
    },
    number: {
        type: Number
    },
    is_active: {
        type: Boolean
    },
    access_rights : {
        type:Array
    }



}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })


var Staff = mongoose.model('Staff', staff)

module.exports = Staff;