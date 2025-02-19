
// ------------ HOISTING ----------
// whenever we access a variable or a function before its declaration is called Hoisting

// console.log(a); // use
// myfunction(); // use
// var a = 20; // define
// function myfunction(){ // define
//     console.log("inside myfunction");
// }

//-------------------------------------
//hoisting----
function a(){ //define
    console.log(b); //use
    var b = 10; // define
}
a(); //access

