
const express = require('express');
const app = express();

// app.get('/r/cat',function(req,res){
//     res.send('cat');
// })

// app.get('/r/dog',function(req,res){
//     res.send('dog')
// })

//path parameter(:) -> req.params -> object 
// app.get('r/:subreddit', function(req,res){
//     // console.log(req);
//     console.log(req.params);
//     let {subreddit} = req.params;
//     res.send(`req sent at : ${subreddit}`)
// })


// query parameter(?) -> req.query -> object
app.get('/search', function(req,res){
    // console.log(req);
    console.log(req.query);
    let {bhagwan,wife} = req.query; 
    res.send(`query parameter aa gya ${bhagwan} and ${wife}`);
})



app.listen(8080,function(){
    console.log('server connected at port 8080');
})



