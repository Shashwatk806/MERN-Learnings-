
let arr = [10, 20, 30, 40, 50];
// 1. length -> property 
//  console.log(arr.length); // 5

 // 2. push() -> method --> last me add krna
// arr.push(60);
// console.log(arr);
// console.log(arr.length); // 6

// -------- multiple push ------------  yes it is possible
// arr.push(60,70,80,90);
// console.log(arr);
// console.log(arr.length);

//  3. pop() -> method --> last se hta deta hai
// arr.pop(50);
// arr.pop(20); // in any condition it will only remove last element , no mean of giving it argument
// console.log(arr);

// return value
let ans = arr.pop(); // it returns the last value pop
let ans2 = arr.push(60); // it returns the length

console.log(ans);
console.log(ans2);
