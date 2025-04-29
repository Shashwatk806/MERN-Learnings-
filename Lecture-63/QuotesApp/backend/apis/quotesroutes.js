const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');
const Quotes = require('../models/Quote');

// to get all the quotes 
router.get('/allquotes',async (req,res)=>{
    try{
        let allQuotes = await Quote.find({});
    res.status(200).json(allQuotes);
    }catch(e){
        res.status(400).json({msg:"something went wrong."})
    }
})

// to add new quote
router.post('/newquote',async (req,res)=>{
   try{
    let {author,text} = req.body;
    let newQuote = await Quotes.create({author,text})
    // console.log(newQuote,"newQuote");
    
    res.status(201).json({msg:"new quote created successfully"})
   }catch(e){
    res.status(400).json({msg:"something went wrong."})
}
})

router.get('/quotes/:id', async (req,res)=>{
  let quoteId = await Quotes.findById(req.params.id);
  res.status(200).json(quoteId);
})


module.exports = router;
