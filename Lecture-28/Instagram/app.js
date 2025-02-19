//wrong way
// function Step1(fn){
//     console.log("selecting the img from gallery");
//     setTimeout(function(){
//         return 'selected img';
//     }, 4000);
// }
// function Step2(image){
//     console.log(`applying filter on the img ${image}`)
//     setTimeout(function(){
//         return 'filter applied'
//     }, 2000)
// }
// let image = Step1();
// console.log(image);
// let filterimgage = Step2();
// console.log(filterimgage);

//---------------------------------------------
// right way
function Step1(fn){
    console.log('please wait image is being selected...');
    setTimeout(function(){
        console.log('image is selected')
        fn ('photo.jpg'); //step 2 ka function
    },4000)
}
function Step2(image,fn){
    console.log(`applying filter to the ${image}`)
    setTimeout(function(){
        console.log(`filter applied to ${image}`);
        fn('filtered image'); // step 3 ka function
    },2000)
}
function Step3(filter,fn){
    console.log(`Adding caption to the ${filter}`);
    setTimeout(function(){
        console.log('caption done');
        fn('captioned image') // step4 ka function
    },3000);
}
function Step4(caption){
    console.log(`uploading your final ${caption}`);
    setTimeout(function(){
        console.log('image uploaded successfully')
    },5000)
}
Step1(function(image){
    Step2(image,function(filter){
       Step3(filter,function(caption){
        Step4(caption)
       });
    });
})








