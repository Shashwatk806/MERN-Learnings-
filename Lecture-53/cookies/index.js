
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser'); // installed


app.use(cookieParser());

app.use(cookieParser(iamyoursecretteacher)); //secret

app.get('/', (req,res)=>{
    // console.log(req.cookies); //signed cookies ❌
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})


//cookies server bhejta hai -> route -> server send karwaye to the client

app.get('/setcookies', (req,res)=>{
    res.cookie('mode', 'dark');
    res.cookie('location','delhi');
    res.cookie('username', 'samarth');
    res.cookie('age', 21);
    res.cookie('pass', 'baba ji ka rickshaw', {signed:true}); // secured -> signed cookie
    // res.cookie('favColor' : 'red', 'phone':'samsung'); //object ❌
    res.send("maine cookie bhejdi hai")
}) 
app.get('/getcookies', (req,res)=>{
    // console.log(req.cookies); //get
    let {username, age} = req.cookies;
    res.send(`hi my name is ${username} and my age is ${age}`);
})



app.listen(5050, ()=>{
    console.log("server at 5050");
})
