
const express = require('express');
const app = express();
const path = require('path');

app.use(express.json()); 

let arr = ['hi','hello','bye'];
let num = Math.floor((Math.random()*26)+5);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/',function(req,res){
    res.render('app');
})

app.get('/star',function(req,res){
    res.render('star',{arr})
})

app.get('/random', function(req,res){
    res.render('random',{num});
})
app.get("/item", () => {
    console.log("Hello world");
})

app.post('/send-data', (req, res) => {
    let { name, age } = req.body;  // Extract data from request body

    // Send a response back
    res.json({
        message: `Hello, ${name}! You are ${age} years old.`,
        receivedData: req.body
    });
});

app.listen(8080,function(){
    console.log('server connected at port 8080');
})