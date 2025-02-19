
let dog = require('./dog');
let cat = require('./cat');

// module.exports = {} 
module.exports = "sam";

// whenever you require anyfolder then the index.js file inside that folder is resposible for the export of it



module.exports = {cat,dog}



