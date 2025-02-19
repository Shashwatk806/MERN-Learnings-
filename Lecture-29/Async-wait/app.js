
// function something(){

// }
// console.log(something());
//---------------------------------------

//  async function something(){


// }
// console.log(something()); // returns a promise with undefined

//-------------------------------------

//  async function something(){

//     return 10;
// }
// console.log(something()); // return a promise with  resolve value of return i.e. 10

//------------------------------------
async function something(){

    return 10;
}
something().then(function(data){
    console.log(data);
})














