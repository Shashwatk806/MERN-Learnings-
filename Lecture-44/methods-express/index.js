
const express = require('express');
const app = express();

// middleware function -> runs one every incoming  request
// app.use(function(req,res){
//     res.send('<h1>Hi this is midleware function</h1>')
// })

//with path
// app.use("/cat",function(req,res){
//     res.send('<h1>Hi this is cat midleware function</h1>')
// })

app.use("/cat",function(req,res,next){
    console.log('hi i am a cat middleware');
    next();
    
})

app.get('/sam', function(req,res){
    res.send("<h2>hi this is samarth</h2>")
})

app.get("/cat",function(req,res){
    res.send('<h1>response from /cat</h1>')
})
//for all the lefover path
app.get("*",function(req,res){
    res.send('<h1>page 404 not found</h1>')
})
app.listen(8080,function(){
    console.log("server is connected at port 8080");
})





