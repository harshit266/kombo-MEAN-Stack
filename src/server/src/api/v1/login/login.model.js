const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const login = new Schema({

    email: {
        type: String,
    },
    password :{
        type : String
    }
    
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
})

var Login  = mongoose.model('Login', login);

module.exports = Login; 