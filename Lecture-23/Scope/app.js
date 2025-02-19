
// var a = 20;
// function b(){
//     console.log(a);
// }
// b();// ans -> 20;

//-----------------------------------------

function outer(){
    var a = 10;
    inner();
    function inner(){
        var a= 1000;
        console.log(a);
    }
    console.log(a);
}
outer(); 

//--------------------------------------
// function outer(){
//     var a = 10;
//     // inner();
//     // function inner()
//     {
//         var a= 1000;
//         console.log(a);
//     }
//     console.log(a);
// }
// outer();