
const mongoose = require('mongoose');

//schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    img: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    desc: {
        type: String,
        trim: true,
    }
})

// model/collections > JS class > objects
//model should be singular and with first letter capital
let Product = mongoose.model('Product',productSchema);

module.exports = Product;




