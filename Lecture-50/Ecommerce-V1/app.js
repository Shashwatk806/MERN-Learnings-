
const express = require('express');
const app = express(); //instance
const path = require('path');
const mongoose = require("mongoose");
const seedDB = require("./seed");

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

// seedDB(); // bar bar store ho jayega if not commented

const port = 8080;
app.listen(port, ()=>{
    console.log(`Sever conected at port: ${port}`);
    
})

//1. Basic Server
//2. Mongoose connection
//3. Model > seed data
//4.



