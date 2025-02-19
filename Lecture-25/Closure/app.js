
// function myfun(){
//     let username = "goli beta";
//     function masti(){
//         console.log(username +" masti nhi")
//     }
//     masti(); //calling a fun
// }
// myfun();

//---------------------------------------
// Closure concept
function myfun(){
    let username = "goli beta";
    function masti(){
        console.log(username +" masti nhi")
    }
    return masti;   //returning a fun
}
let retfun = myfun();
retfun();
