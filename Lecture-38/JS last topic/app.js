
const person = {
    first : "samarth",
    last : "vohra"
}

console.log(person);

// Can I add a property ?
person.age = 40;
console.log(person);

// can I chage the existing value ?
 person.last = "kumar";
 console.log(person);

 // can I delete a property ?
  delete person.last;
  console.log(person);

  //------------------------------------------
  // Array pe spread 
  let arr = [10,20,30,40];
  let arr2 = [80,90,100];
  //concatenation (jodna) 
  let ans = arr.concat(arr2);
  console.log(ans);

  // modern way -> most widely used
   arr2 = [...arr, 80,90,100]; 
   let res = [...arr, ...arr2];
   console.log(res);

   // object pe spread
   let obj = {
    l : "sam",
    m : "vohra",
    n : 10
   }

   let obj1 ={
    ...obj,
    age : 45
   }
// console.log(obj);
// console.log(obj1);

obj1.l = 200;
console.log(obj);
console.log(obj1);

//---------------------------------
 // destructuring in Array
  let fruits = ["apple", "mango", "pineapple", "strawberry","lichi"];
  //bekar way
//   console.log(fruits[0]);
//   console.log(fruits[1]);

  //modern way
//   let [a,b,c,d] = fruits;
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);

  let [a,b,c,d,e="banana"] = fruits; //default value
    console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);

// destructuring in objects
 let car = {
    name : "bmw",
    price : 150
 }
 //normal way 
 console.log(car.name);
 console.log(car.price)

//modern way
//  let {n, p} = car; //wrong way
let {name:changedname ="samkicar", price} = car; //default
console.log(name); //no
console.log(changedname);//yes
console.log(price);






