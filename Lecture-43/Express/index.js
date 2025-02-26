
// const express = require('express');
// const app = express();

// const fs = require('fs'); // object
// const path = require('path'); // object
// fs.writeFile();
// path.join('sam', 'vohra');

const express = require('express'); // function// sklfhfhffbufhjhhvnlnlasqw

const app = express(); // return something -> main application object.
// this app is our entire instance for application.
// console.log("samarth bhai backend");

//----------------------------------
// middleware function
// app.use(function(req, res){
//     console.log('you made a request');
// })
// runs on every incoming request
app.use((req, res)=>{
    console.log('you made a request');
    // console.log(req);
    // res.send('hi, server gave the response.')
    res.send(<h1>hi server gave the response.</h1>)
})

app.listen(8080, function(){    // 2 arguements port no , cb function
    console.log("server connected at port 8080 mst hai");
})


