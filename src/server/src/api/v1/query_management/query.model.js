const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const query = new Schema({

    category: {
        type: String,
    },
    username: {
        type: String,
    },
    email :{
        type : String
    },
    number :{
        type : String
    },
    amount:{
        type : Number
    },
    bank_statement :{
        type : String
    },
    status :{
        type: String
    }



}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })


var Query = mongoose.model('Query', query)

module.exports = Query;