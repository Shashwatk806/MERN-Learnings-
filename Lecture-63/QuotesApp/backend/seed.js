
const mongoose = require('mongoose');
const quotes = require('./models/Quote');

let dummyQuotes = [
    {
        author:"Sam",
        text:"aadmi ka jeevan sangharsh hai, harna ya jeetna nhi"
    },
   { author:"Prince",
    text:"har kr jeetne wale ko bazigar kehte hai"
   },{
    author:"Mountain Dew",
    text:"dar k aage jeet hai"
   }
];

async function seedDB(){
    await quotes.insertMany(dummyQuotes);
    console.log("DB seeded with data ✔😊");
    
}


module.exports = seedDB;
