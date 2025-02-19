
// bina object k b this keyword exist krta hai
// this keyword always depends upon how it is being called

// function fn(){
//     console.log(this);
// }
// fn(); // regular calling function

// 1. In case of regular calling function -> 'this' always points towards the window object 

// window -> global Object; 
  
// eg:

// function sam(){
//     console.log(this);
// }
// sam();

//2. method invocation -> this always point towards the object;

// let obj2 = {
//     a : 100,
//     sam : function(){
//         console.log(this); // obj2
//     }
// }
// obj2.sam(); // gives the object

// let obj2 = {
//     a : 100,
//     sam : function(){
//         console.log(this);
//         console.log(this === window)
//     }
// }
// let ans = obj2.sam;
// ans(); //direct function

// // eg:3 

// let obj3 = {
//     a:100,
//     fn : function(){
//         console.log(this); //obj3
//         function sam(){
//             console.log(this); // window
//         }
//         sam(); // direct function
//     }
// }
// obj3.fn();

//------------------------------------------------
// 3. Constructor Invocation
// this always point towards newly created Object;
// function createObj(){
//     this.x = 200;

// }
// let obj = new createObj();
// console.log(obj.x);

//----------------------------------------------
// 4. Indirect invocation
// 1-> call();
// let obj = {
//     a:20,
//     fn : function(a,b,c){
//         console.log(this,a,b,c);
//     }
// }

// let obj2 = {
//     a:50,

// }

// obj.fn(1,2,3); // method invocation
// now what if I had to call it using obj2
// obj.fn.call(obj2); // this->obj2-> changes the context of this
// obj.fn.call(obj2,1,2,3);

//4.2 apply()
// call() and apply() are same -> they both changes the context of this
// but in apply() arguments are called using array;

// obj.fn.apply(obj2,1,2,3) // wrong way
// obj.fn.apply(obj2,[1,2,3]); // right way

//4.3 bind
// it doesnt call the function like call() and apply(), but it binds the function

// let obj3 = {
//     fn:function(){
//         console.log(this);
//     }
// }
// let myfun = obj3.fn.bind(obj3);
// console.log(myfun);
// myfun();

// function fn3(){
//     console.log(this);
// }
// // fn3(); // regular function

// let fn4 = fn3.bind(100); //this will bind fn4 to 100
// fn4(); 

//------------------------------------------------------------
// 5. Arrow function 

let obj = {
    fn : function(){
        console.log(this);
        function sam(){
            console.log(this);
        }
        sam(); // direct function
    }
}
obj.fn(); // method invocation

// but changing inner function to arrow function 


let obj2 = {
    fn : function(){
        console.log(this);
        let sam = ()=>{
            console.log(this); // this will point to lexical en of parent
        }
        sam(); //obj2
    }
}
obj2.fn(); //method invo
//both th output of console will be same;


let obj3 = {
    fn : () => {
        console.log(this);
        let sam = ()=>{
            console.log(this);
        }
        sam();
    }
}
obj3.fn();
// this will give window because obj3 will point to window I.E. parent of object





