const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const category = new Schema({

    category: {
        type: String,
        required: true
    },
    intrest_rate: {
        type: String,
        required: true
    },
    category_image :{
        type : String
    },
    is_active: {
        type: Boolean
    }



}, {
        timestamps: { createdAt: 'createdAt', updatedAt: 'lastUpdate' }
    })


var Category = mongoose.model('Category', category)

module.exports = Category;