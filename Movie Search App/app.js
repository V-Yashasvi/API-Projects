let movieContainer=document.querySelector('.movie-container');
let searchBox=document.querySelector('.input');
let searchBtn=document.querySelector('.SearchBtn');

const fetchMovie= async (query)=>{
    movieContainer.innerHTML="Fetching Movie..........s";
    const data=await fetch(`https://www.omdbapi.com/?apikey=72b9f53e&s=${query}`)
    const response=await data.json();
    
    console.log(response)

    movieContainer.innerHTML="";
    response.Search.forEach(movie => {
        // console.log(movie)
        const movieDiv=document.createElement('div')
        movieDiv.setAttribute("class",'movieDiv')
        movieDiv.innerHTML=`
        <img src="${movie.Poster}">
        <h1>${movie.Title}</h1>
        <p>${movie.Year}</p>
        `

        movieContainer.appendChild(movieDiv)

    });

}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let SearchInp=searchBox.value.trim();
    fetchMovie();
})