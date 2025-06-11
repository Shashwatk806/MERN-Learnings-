
let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('#list');

btn.addEventListener('click', function(){
    let searchText = input.value;
    fetchMovie(searchText);
    input.value = "";
})

function fetchMovie(searchText){
    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);
        showMovie(data)
    })
    .catch(function(err){
        console.log(err);
        
    })
}

function showMovie(alldata){
    while(list.firstChild){
        list.firstChild.remove();
    }
    alldata.forEach(element => {
          let fig = document.createElement('figure');
            fig.innerHTML = `
            <img src = ${element.show.image.medium} />
            <h2> Name: ${element.show.name} </h2>
            <h3> type : ${element.show.type} </h3>
            <h5> Language: ${element.show.language} </h5>
    `
    list.appendChild(fig)
    });

}
