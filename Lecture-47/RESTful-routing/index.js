

const express = require('express'); // function
const app = express(); //object
const path = require('path'); // node module already present

app.set('view engine', 'ejs'); // engine
app.set('views',path.join(__dirname,'views')); // template
app.use(express.static(path.join(__dirname,'public'))); // public -> static file

//Restful route according to the restful table -> right to left
// Task-1 -> show all the comments  -> where all my comments -> DB -> Array

app.get('/comments', (req,res)=>{
    res.render('index')
})



const PORT = 5050;
app.listen(PORT, ()=>{ //listener
    console.log(`server connected at port ${PORT}`);
})

