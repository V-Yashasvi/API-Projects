let searchBtn=document.getElementById('SearchBtn');
let searchInput=document.getElementById('input');
let searchForm=document.getElementById('search-container')
let movieContainer=document.createElement('div')

searchForm.addEventListener('submit',function(event){
    e.preventDefault(); 
    searchBtn.style.backgroundColor='blue'
    fetchMovie(event)
})
let inpVal=document.getElementById("searchInput").value;
console.log(inpVal)
const fetchMovie=async (inpVal)=>{
    movieContainer.innerHTML="Fetching Movies......."
    const data=await fetch(`https://www.omdbapi.com/?apikey=72b9f53e&s=${inpVal}`);
    const response=await data.json();
    console.log(response)
    // movieContainer.innerHTML='';
    // response.movie.forEach((movie) => {
    //     console.log(movie)
    //     const movieDiv=document.createElement('div');
    //     movieDiv.setAttribute('class','movie')
    //     movieDiv.innerHTML=``;
    //     const button=document.createElement('button')
    //     button.textContent="View Details"
    //     movieDiv.appendChild(button);
    //     movieContainer.appendChild(movieDiv)
    // })
    }
    fetchMovie()



 // async function getMovie(){
    //     let inpVal=document.getElementById("searchInput").value;
    //     let fetchedData=fetch(`https://www.omdbapi.com/?apikey=72b9f53e&s=${inpVal}`)
    //     console.log(fetchedData)
    //     console.log(inpVal)
    // }
    // getMovie()
// searchInput.addEventListener('mouseover',()=>{
//     searchInput.style.backgroundColor='#f8bbbb '
// })
// searchInput.addEventListener('mouseout',()=>{
//     searchInput.style.backgroundColor='#e9ffef '
// })
