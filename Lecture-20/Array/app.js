
 // homogeneous C++/java
// let arr = [2, 5, 7, 20, 50, 77]
// console.log(arr[0]);
// console.log(arr[4]);
// console.log(arr[44]); // undefined
// // if we do 
// arr[2] = 25;
// console.log(arr); // value will be updated

// heterogeneous
// let arr2 = [10, "sam", true, undefined, null, 100]

// console.log(arr2[0]);
// console.log(arr2[4]);
// console.log(arr2[44]); // undefined
// // if we do 
// arr2[2] = 25;
// arr2[1] = false;
// arr2[2] = {
//     naam : "sam",   // we can also put object;
// }
// console.log(arr2); // value will be updated

//------------------------------------------------------
// 1D array
let arr = [10, "sam", true, undefined, null, 100];
//2D Array
let arr2 = [10, "sam", true, [100,200,[4,5,6]], null, 100];
console.log(arr2[3]);
console.log(arr2[3][1]);
console.log(arr2[3][2][1])

// array are very flexible; 
arr2[75] = "prince";
console.log(arr2[75]);
console.log(arr2);
