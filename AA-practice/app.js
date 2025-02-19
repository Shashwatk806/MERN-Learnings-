

fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})


















