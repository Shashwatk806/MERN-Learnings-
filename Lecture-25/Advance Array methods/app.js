
// let worldcup = ["India", "Aus", "NZ", "SA", "SL"];
// // 1. forEach() -> Accepys a cb function.
// worldcup.forEach(function(item){
//     console.log(item);
// })

// worldcup.forEach(function(item,index){ // be default int forEach() first argument will give item and second will give index
//     console.log(index +'->'+ item);
// }) 

// ---------------------------------------------

//  let sqArray = number.map(function(item){ //HOF
//     return item*item;
//  })
//  console.log(number);
//  console.log(sqArray);

// let sqArray = number.map(function(item,idx){ //HOF
//     return item*idx;
//  })
//  console.log(number);
//  console.log(sqArray);

//---------------------------------------------------------

// let number = [10,20,30,40,50];
// let filArray = number.filter(function(item){
//     return item >= 30;
// })
// console.log(number);
// console.log(filArray);

//--------------------or--------------
// let filArray = number.filter(function(item){
//     if(item >= 30){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(number);
// console.log(filArray);

//---------------------------------------------------

let number = [10,20,30,40,50];
let newArr = number.reduce(function(acc,item){ // accumulator + current element
    return acc+item;
});
console.log(number);
console.log(newArr);


