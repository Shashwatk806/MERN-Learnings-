//constructor
// function Person(naam, umar){
//     this.username = naam,
//     this.age = umar
// }
// Person.prototype.getFullName = function(){
//     return (`my name is ${this.username}`)
// }
// Person.prototype.printName = function(){
//     console.log(`my name is ${this.username} `)
// }

// let person1 = new Person('prince',25);
// console.log(person1);

//class

class Person{
    constructor(naam, umar){
        this.username = naam,
        this.age = umar
    }
    getFullName(){  //for these two functoin no need to store using prototype
    return (`my name is ${this.username}`)
    }
    printName(){
        console.log(`my name is ${this.username} `)
    }
}
let person1 = new Person("prince",25)
console.log(person1);



