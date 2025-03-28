
const express = require('express');
const app = express(); //instance
const path = require('path');
const mongoose = require("mongoose");
const seedDB = require("./seed");
const productRoutes = require('./routes/product');
const methodOverride = require('method-override')


mongoose.connect("mongodb://127.0.0.1:27017/myDB")// returns a promise
.then(()=>{
    console.log('db conected')
})
.catch((err)=>{
    console.log('error is: ', err)
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));
// Middleware to parse form data (for `application/x-www-form-urlencoded`)
app.use(express.urlencoded({ extended: true }));
// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('_method'))

// seedDB(); // bar bar store ho jayega if not commented

app.use(productRoutes);

const port = 8080;
app.listen(port, ()=>{
    console.log(`Sever conected at port: ${port}`);
    
})

//1. Basic Server
//2. Mongoose connection
//3. Model -> seed data
//4. routes -> views




