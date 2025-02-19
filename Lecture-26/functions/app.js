
// function user(){

// }
// let user1 = user();
// console.log(user1);
// //constructor function --> it returns an object
// let user2 = new user();
// console.log(user2);

//------------------------------------------------
//constructor function -> first letter should be capital(by convention)

// function User(){
//     this.username = "prince";
//     this.age = 25;
//     this.color = "blue";
// }
// let user2 = new User();
// console.log(user2);

// function User(naam, umar, rang){
//     this.username = naam;
//     this.age = umar;
//     this.color = rang;
// }
// let user2 = new User('prince',25,'blue');
// let user3 = new User('sam',25,'black');
// console.log(user2);
// console.log(user3);
//------------------------------------------------
function User(naam, umar, rang){
    this.username = naam;
    this.age = umar;
    this.color = rang;
    // this.desc = function(){
    //     return `my name is ${this.username}`;
    // }
}
User.prototype.desc = function(){
    return `my name is ${this.username}`;

}
let user2 = new User('prince',25,'blue');
console.log(user2);
console.log(user2.desc());

let user3 = new User('sam',25,'black');
console.log(user3);
console.log(user3.desc());
// this both will print desc fun again, to overcome this we will throw the desc function to its prototype






