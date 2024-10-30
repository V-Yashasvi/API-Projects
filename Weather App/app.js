let searchBar=document.getElementById('search-bar')
let container=document.querySelector('.container')
let searchBtn=document.getElementById('search-icon')
let weatherIcon=document.querySelector('weather-icon')

// const api_key='0064c6e7cd4a84632e5846777226b3fc';
// let city=searchBar.value;
// const api_url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const api_url="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
// console.log(city)

async function getWeather(query){
    // const response=await fetch(api_url+`${city}`+`&appid=${api_key}`)
    const response=await fetch("https://api.openweathermap.org/data/2.5/weather?0064c6e7cd4a84632e5846777226b3fc")
    var data=await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C"
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%"
    document.querySelector('.wind').innerHTML=data.wind.speed+"km/h"

    if (data.weather[0].main=="Clouds"){
        weatherIcon.src="./assets/Weather App/assets/cloud.png"
    }
    else if (data.weather[0].main=="Clear"){
        weatherIcon.src="./assets/Weather App/assets/clear.png"
    }
    else if (data.weather[0].main=="Mist"){
        weatherIcon.src="./assets/Weather App/assets/mist.png"
    }
    else if (data.weather[0].main=="Rain"){
        weatherIcon.src="./assets/Weather App/assets/rain.png"
    }
    else if (data.weather[0].main=="Snow"){
        weatherIcon.src="./assets/Weather App/assets/snow.png"
    }
    else{
        weatherIcon.src="./assets/Weather App/assets/404.png";
    }
}
getWeather();

searchBtn.addEventListener('click',()=>{
    // getWeather(data);
})
