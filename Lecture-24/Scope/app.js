
// function outer(){
//     var a = 10;
//     inner();
//     function inner(){
//         console.log(a);
//         var a = 30;
//         console.log(a);
//     }
//     var a = 1000;
// }
// console.log(a);
// outer(); // this will give error as a is not defined

//------------------------------------

// function outer(){
//     var a = 10;
//     inner();
//     function inner(){
//         console.log(a);
//         var a = 30;
//         console.log(a);
//     }
//     var a = 1000;
// }

// outer();
// ans will be --> undefined;
//                   30;

//-------------------------------------
// sit 1;
// function outer(){
//     var a = 10;
//     console.log(a);

//     function inner(){
//                 console.log(a);
//                 var a = 200;
//                 console.log(a);
//             }
// console.log(a);
// }
// outer();
// ans will be--> 10, 10

// case 2--------------------------------
// function outer(){
//     var a = 10;
//     console.log(a);
//     inner();
//     function inner(){
//                 console.log(a);
//                 var a = 200;
//                 console.log(a);
//             }
// console.log(a);
// }
// outer();
// ans will be--> 10, undefined, 200, 10 (consol order)

// case 3--------------------------------
// function outer(){
//     inner();
//     var a = 10;
//     console.log(a);
    
//     function inner(){
//                 console.log(a);
//                 var a = 200;
//                 console.log(a);
//             }
// console.log(a);
// }
// outer();
// ans will be--> undefined, 200, 10,10 (consol order)

// case 4--------------------------------   
// function outer(){

//     var a = 10;
//     console.log(a);
    
//     if(true){
//         console.log(a);
//          var a = 200;
//         console.log(a);
//             }
// console.log(a);
// }
// outer();
// ans will be--> 10, 10, 200, 200 

// case 5--------------------------------
// function outer(){

//     let a = 10;
//     console.log(a);
    
//     if(true){
//         console.log(a);
//          a = 200;   //it will ovverride the value in parent
//         console.log(a);
//             }
// console.log(a); //change parent me hua tha , thats why ye bhi 200 dega
// }
// outer();
// ans will be--> 10, 10, 200, 200

// Let -->case --------------------------------
// function outer(){
//     let a = 10;
//     console.log(a);
//     inner();
//     function inner(){
//                 console.log(a);
//                 let a = 200;
//                 console.log(a);
//             }
// console.log(a);
// }
// outer();
// ans will be -> 10 , error(cant access a before initialization)

// function outer(){
//     let a = 10;
//     console.log(a);
//     inner();
//     function inner(){

//                 let a = 200;
//                 console.log(a);
//             }
// console.log(a);
// }
// outer();
//ans will be -> 10,200,10

function outer(){
    let a = 10;
    console.log(a);
    // {
    //     var a = 200; throw error here
    //     console.log(a); 
    // }
    {
        let a = 200;
        console.log(a);
    }
          
console.log(a);
}
outer();
