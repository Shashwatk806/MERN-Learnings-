
const mongoose = require('mongoose');

//schema
const reviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        min:0,
        max:5
    },comment:{
        type:String,
        trim:true
    }
}, {timestamps:true})

// model/collections -> JS class -> objects
//model should be singular and with first letter capital
let Review = mongoose.model('Review',reviewSchema);

module.exports = Review;




