
const mongoose = require('mongoose'); //object
const Product = require('./models/product');

//inserting many > seeding

const products = [
    {
        name:"Apple iphone 14",
        img:"https://images.unsplash.com/photo-1677563277026-17a254ea02f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTR8ZW58MHx8MHx8fDA%3D",
        price:120000,
        desc:"very costly phone it is"
    },
    {
        name:"Apple macbook pro",
        img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
        price:230000,
        desc:"this is a very good machine"
    },
    {
        name:"Apple Pencil",
        img:"https://images.unsplash.com/photo-1551651639-927b595f815c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXBwbGUlMjBwZW5jaWx8ZW58MHx8MHx8fDA%3D",
        price:10000,
        desc:"I can write future"
    }
]

async function seedDB(){
   await Product.insertMany(products);
   console.log("DB seeded");
   
}

module.exports = seedDB;


