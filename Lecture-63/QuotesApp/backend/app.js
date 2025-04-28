const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const quoteRoutes = require('./apis/quotesroutes');


mongoose.connect('mongodb://127.0.0.1:27017/quotes')
  .then(() => console.log('DB Connected!'))
  .catch((err)=>{
    console.log("Error in DB",err);
  });

  app.use(express.json()) // for parsing application/json
  app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  
// app.get('/', (req,res)=>{
//     res.status(200).json({msg:"hello from root"})
// })

app.use(quoteRoutes);

// seedDB();

const port = 8000;
app.listen(port, ()=>{
    console.log(`Backend server connected at ${port}`);
    
})
