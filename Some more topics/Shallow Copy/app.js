
// lets copy a object

let obj = {
    name : "harsh",
    age : 20
}

let obj2 = obj; // this is not actual copy of obj, here only reference is passed
obj2.name = "kaju";
console.log(obj);
console.log(obj2);
//it will change the original obj also

// to do actual copy of object we do 
let obj3 = {
     name : "harsh",
    age : 20
}

let obj4 = {...obj3}; // here actuall copy is passed
// so if we do 
obj3.name = "krishna";
console.log(obj3);
console.log(obj4); 
// it will make chnge only in obj4 
// but what if there is nested object
//here comes the concept of Shallow copy

let original = {
    name : "harsh",
    age: 22,
    social : {
        fb : {
            acc1 : "sam@gmail.com"
        },
        twitter : {
            acc1 : "prince@gmail.com",
            acc2 : "ram"
        }
    }
}

let shallowCopy = {...original};

shallowCopy.name = "kaju";  // it will change the object properties
shallowCopy.social.twitter.acc1 = "changed";

console.log(original.name);

console.log(original.social.twitter);
console.log(shallowCopy.social.twitter); //
//they both will print same beacuase in nested object only top level is copied and other are with reference







