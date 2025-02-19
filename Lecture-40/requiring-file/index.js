
const pi = 3.14;

const ans1 = num => num*num;

const ans2 = (a,b) => a+b;

console.log(pi);
console.log(ans1(7));
console.log(ans2(3,8));

// module.exports = {}; // by default 

// module.exports = {
//     pi : pi,
//     ans1 : ans1,
//     ans2 : ans2
// }
        // or if key and value pair are same
// module.exports = {pi,ans1,ans2}; 

module.exports = "samarth"; 