
// not one of the ggod way (but correct)
class Person{
    constructor(naam,umar){
        this.username = naam,
        this.age = umar
    }
    printname(){
        console.log(`my name is ${this.username}`);
    }
    getFullName(){
        return `my name is ${this.username}`;
    }
}

// let person1 = new Person("anand", 25);
// console.log(person1);
// console.log(person1.getFullName());

// class Student{
//     constructor(naam,umar){
//         this.username = naam;
//         this.age = umar;
//     }
//     printname(){
//         console.log(`my name is ${this.username}`);
//     }
//     getFullName(){
//         return `my name is ${this.username}`;
//     }
// }

// let person2 = new Person("anand", 25);
// console.log(person2);

//-----------------------------------------------------------
// we use inheritance property here 
// class Student extends Person{

// }
// let person2 = new Student("sam",25); 
// console.log(person2); 

//---------------------------------------------------------
class Student extends Person{
    constructor(naam,umar,rollno){
                // this.username = naam;
                // this.age = umar;
                //-------or------
                super(naam,umar);
                this.rollnumber = rollno;
            }
}
let person2 = new Student("sam",25,10);
console.log(person2);

