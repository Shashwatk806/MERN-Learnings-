
// let person = {
//     //propertry
//     naam : "prince",
//     city : "vns",

//     //methods -> functions

//     describe : function ans(){
//         console.log("my name is Prince");
//     }
// }

// console.log(person);
// console.log(person.city);
// console.log(person.naam);
// console.log(person.describe); // wrong way
// console.log(person.describe()); //right
// console.log(person.ans()); // wrong way
// ans(); // wrog way -> object ki andr ki chije bina object use kiye hue nhi nnhi call kr skte


//-----------------------------------------------
//let person_is_a_very_good_person = {
let person = {
     //propertry
    naam : "prince",
    city : "vns",
    //methods -> functions which are described inside an object.

    describe : function result(){
        console.log("my name is Prince");
        console.log(`my name is ${person.naam}`)
        console.log(`my name is ${this.naam}`) // this keyword is used instead of object name.
        // return person;
    }
}
let ans = person.describe(); // by default undefined is returned
console.log(ans);

