
function counter(){
    let count = 0;
    return {
        getCount : function(){
           return count;
        },
        increment : function(){
            count++;
        },
        decrement : function(){
            count--;
        },
        reset : function(){
            count = 0;
        }
    }
}
// console.log(count); //error
let counter1 = counter();
console.log(counter1); // it gets the mothod only not the count variable

console.log(counter1.getCount());
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();
console.log(counter1.getCount());
counter1.reset();
console.log(counter1.getCount());




