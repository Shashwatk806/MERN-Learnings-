
// function getData(cb){
//     setTimeout(function(){
//         // let data = "hello my family" //assume server de rha hai
//         cb(null); //server decides
//         // cb(data);
//     },4000);
// }

// getData(function(data,error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// })

//------------------------------------------------------------------
//callback hell -> Promise
 
// let mypromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let data = "hello my family";
//         resolve(data); //promise fullfilled
//     },3000)
// });
// mypromise.then(function(data){ //it accepts a cb function
//     console.log(data)
// })

// let mypromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         // let data = "hello my family";
//         let err = "server not given data";
//         // resolve(data); //promise fullfilled
//         reject(err);
//     },3000)
// });


// // mypromise.then().catch() -> written in this type
// mypromise
// .then(function(data){ //it accepts a cb function
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error);
// })

//----------------------------------------------------------
let mypromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        let data = "hello my family 'resolve'";
        let err = "server not given data";
        resolve(data); //promise fullfilled
        reject(err);
    },3000)
});
// in this case resolve will run resolve will run and vice versa
mypromise
.then(function(data){ //it accepts a cb function
    console.log(data)
})
.catch(function(error){
    console.log(error);
})




