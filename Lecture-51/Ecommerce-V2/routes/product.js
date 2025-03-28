
const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const router = express.Router(); //mini application

//read
router.get('/products', async (req,res)=>{
  let products = await Product.find({});
    res.render('index', {products});
});

//new form
router.get('/products/new', (req,res)=>{
    res.render('new');
})

//actually adding
router.post('/products',async (req,res)=>{
    let {name, img, price, desc} = req.body; //by default defined
    await Product.create({name,img,price,desc}); // automatically db save 
    res.redirect('/products');
})

//showing a particular product
router.get('/products/:id',async (req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id).populate('reviews');
    res.render('show', {foundProduct});
})
//edit the product
router.get('/products/:id/edit', async (req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('edit', {foundProduct});
})
//actually updating the product
router.patch('/products/:id', async (req,res)=>{
    let {id} = req.params;
    let {name, img, price, desc} = req.body; //by default defined
    await Product.findByIdAndUpdate(id, {name, img, price, desc});
    res.redirect('/products');
})
//deleting
router.delete('/products/:id', async (req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    //deleting reviews before deleting product
    for(let ids of foundProduct.reviews){
        await Review.findByIdAndDelete(ids);
    }
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})
module.exports = router;






