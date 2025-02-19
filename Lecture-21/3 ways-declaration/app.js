
// -----------1. var ---------------- 

// var something = 100;
// console.log(something);

// var something = 100; //declaration
// something = 200; //reinitialisation
// console.log(something); //it will give the output 200;

// var something = 100; // declaration
// var something = "samarth"; //redeclaration
// console.log(something); // it will give output -> samarth

// -----------2. let ---------------------------
// let ans = "100";
// ans = 200; // reinitialisation
// console.log(ans); 

// let ans = "100";
// ans = 200; // reinitialisation
// let ans = 200; // redeclare -> no we cannt;
// console.log(ans);

// -----------3. const ---------------------------
// const ans = 100;
// ans = 200; // reinitialise -> no it will give old value
// console.log(ans); // it will print old value

// const ans = 100;
// const ans = 200; // redeclare -> no we cannt
// console.log(ans);

//----------------------------------------------------------------
// Q.1 
// const something: // js engine -> undefined
// something = 100; // renitialise -> no we cant
// console.log(something);

// Q.2
const person ={
    username : "Prince",
    lang : "hindi"
}

// const person ={ // error
//     username : "Prince",
//     lang : "hindi"
// }
// const person = [];
person.lang = "eng";
console.log(person.lang); // it will change 
console.log(person);
person.age = 26; //we can add also
console.log(person);






