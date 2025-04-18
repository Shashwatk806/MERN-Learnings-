
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({
    //usernmae = PLM(passport-local-mongoose)
    //password
    email:{
        type:String,
        trim:true,
        require:true
    },
    role:{
        type:String,
        default:'buyer'
    },
    gender:{
        type:String,
        trim:true,
        require:true
    },
    wishlist:[
        {
             type:mongoose.Schema.Types.ObjectId,
             ref:'Product'
        }
    ], 
    cart:[
        {
             type:mongoose.Schema.Types.ObjectId,
             ref:'Product'
        }
    ]
})

userSchema.plugin(passportLocalMongoose); // always applied on Schema

let User = mongoose.model('User', userSchema);
module.exports = User;
