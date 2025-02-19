
// 1. length
let str = "Maverick";
console.log(str.length);

// toUpperCase() method
let ans = str.toUpperCase();
console.log(ans);

//toLowerCase() method
let ans2 = str.toLowerCase();
console.log(ans2);

// trim() method
let s = "   maverick vohra    ";
let ans3 = s.trim();
console.log(ans3);


// includes() -> method -> returns boolean value
// let ans4 = str.includes("M");
// let ans4 = str.includes("m");
// let ans4 = str.includes("Maverick") --> it will also give true
// let ans = str.includes("Mave") --> true
let ans4 = str.includes(""); //-->true 
console.log(ans4);


// we can also do chaining in methods
let a = s.trim().toUpperCase().length;
console.log(a); // a --> 14




