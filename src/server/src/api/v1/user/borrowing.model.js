const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const borrowing = new Schema({

   
    amount: {
        type: Number,
    },
    month :{
        type : Number
    },
    installment_per_month :{
        type : Number
    },
    due_date :{
        type :String
    },
    payment_date :{
        type: Array
    },
    borrowing_id :{
        type :String
    }



}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })


var Borrowing = mongoose.model('Borrowing', borrowing)

module.exports = Borrowing;