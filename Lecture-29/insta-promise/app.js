// promise
//first class function
//why functions are called first class citizens in JS

// image selection
 let step1 = function(){
    console.log('selecting image');
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('photo.jpg');
        },4000)
    });
 }
 //applying filter
 let step2 = function(image){
    console.log(`appying filter to the ${image}`);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('filter applied')   
        },3000)
    })
 }
 //adding caption
 let step3 = function(filter){
    console.log(`adding caption to the ${filter}`);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('caption added');
        },3000)
    })
 }
 //post
 let step4 = function(caption){
    console.log(`uploading the ${caption} please wait...`);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('uploaded successfully,plz like and share.')
        },5000)
    })
 }

 //promise chaining
 step1()
 .then(function(image){
    console.log('image selected')
    return step2(image);
 })
.then(function(filter){
    console.log('filter applied');
    return step3(filter);
})
.then(function(caption){
    console.log('caption applied');
    return step4(caption);
})
.then(function(post){
    console.log(post);
})
.catch(function(err){
    console.log(err);
})























