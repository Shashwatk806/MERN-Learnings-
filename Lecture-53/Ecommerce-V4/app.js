
const express = require('express');
const app = express(); //instance
const path = require('path');
const mongoose = require("mongoose");
const seedDB = require("./seed");
const productRoutes = require('./routes/product');
const methodOverride = require('method-override');
const reviewRoutes = require('./routes/review');
const flash = require('connect-flash');
const session = require('express-session');


let configSession = {  
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true }
};

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

app.use(session(configSession));
app.use(flash());

//adding locals for flash msgs
app.use( (req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
} )

// so that hr ek incoming req pe jaye
app.use(productRoutes);
app.use(reviewRoutes);



const port = 8080;
app.listen(port, ()=>{
    console.log(`Sever conected at port: ${port}`);
    
})

//1. Basic Server
//2. Mongoose connection
//3. Model -> seed data
//4. routes -> views
//5. Rating schema -> product change -> form to add the rating and comments(show.ejs)




