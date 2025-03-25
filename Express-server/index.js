
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('hello world');
})
app.post('/', (req,res)=>{
    const data = req.body;
    console.log('data', data);
    res.send('Posting on server')
})

app.listen(8080, ()=>{
    console.log("server connected at port 8080");
    
})
