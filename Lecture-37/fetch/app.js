
//most commonly used technique for api call
// web api which returns a promise

fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
    //respose // meta data
    return response.json()  //parses a data and returns a promise -> sare packets ka wait krega
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error); 
})














