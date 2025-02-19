
axios('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
    console.log(response)
})
.catch(function(error){
    console.log(error)
})


