const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const user = new Schema({

   
    username: {
        type: String,
    },
    email :{
        type : String
    },
    password :{
        type : String
    },
    otp :{
        type :Number
    },
    is_active: {
        type: Boolean
    },
    user_id :{
        type :String
    }



}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })


var User = mongoose.model('User', user)

module.exports = User;