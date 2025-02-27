
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//static -> harr req -> middleware
app.use(express.static(path.join(__dirname,'public')));

// route ->page -> styling -> (public -> css -> style.css)
app.get('/whatever',(req,res)=>{
    res.render('whatever')
})

// route-> page -> styling( style.css, bootstrap) + DRY principle
app.get('/horror', (req,res)=>{
    res.render('horror')
})

const PORT = 8080;
app.listen(PORT, function(){
    console.log(`server connected at port ${PORT}`)
});

