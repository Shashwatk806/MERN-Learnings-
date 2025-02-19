
// function defination/declaration
// syntax
// function sum(){

// }

// sum(); // function calling

// ------------------------------------------------

// function sum(){
//     let a = 10;
//     let b = 15;
//     console.log(a+b);
// }
// sum();

// function sum(c){
//     let a = 10;
//     let b = 15;
//     console.log(a+b+c);
// }
// sum(20); // this c value will pointing towards parameter c

// function sum2(n1, n2, c){    //parameterised functions
//     let a = n1;
//     let b = n2;
//     console.log(a+b+c);
// }
// sum2(10,30,40); // argument

//-----------------------------------------------------

// function sum(n1,n2,c){
//     let a = n1;
//     let b = n2;
//     console.log(a+b+c);
// }
// sum(10, 20);  // it will give NaN

// function sum2(n1,n2,c=5){    //default parameterised functions
//     let a = n1;
//     let b = n2;
//     console.log(a+b+c);
// }
// sum2(10, 20); 

// function sum3(n1,n2,c=5){    //default parameterised functions
//     let a = n1;
//     let b = n2;
//     console.log(a+b+c);
// }
// sum3(10, 20,10); // it will override the value of c;

// --------------------------------------------------------------
function sum(num2){
    let num1 = 10;
    let ans = num1+num2;
    return ans;
    // retur 2; //ignore
    console.log("prince") // return k bad function end , this will not run
}
 let final = sum(20); // call -> return value yha ayegi
 console.log(final);


