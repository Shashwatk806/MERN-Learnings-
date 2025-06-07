

let step1 = function(){
    console.log('Selecting image')
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve('photo.jpg');
        },4000);
    })
}

let step2 = function(image){
    console.log(`applying filter to the ${image}`);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
        resolve('filter applied')
        },3000)
    })
}

let step3 = function(filtered){
    console.log(`applying caption to the ${filtered}`);
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve('caption done')
        },3000);
    })
}

let step4 = function(captioned){
     console.log(`uploading the ${captioned} please wait...`);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('uploaded successfully,plz like and share.')
        },5000)
    })
}

step1().then(function(image){
    console.log('image selected');
    return step2(image)
}).then(function(filtered){
    console.log('filter applied');
    return step3(filtered)
}).then(function(captioned){
    console.log('caption applied');
    return step4(captioned)
}).then(function(post){
    console.log(post)
}).catch(function(err){
    console.log(err);
    
})



