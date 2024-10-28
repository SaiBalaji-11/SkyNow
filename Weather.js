let URL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let APIKEY="47c8bb73c193e304761561f40dc234a5";

let searchBox=document.querySelector(".search input");
let searchBtn=document.querySelector(".search button");
let wheathericon=document.querySelector(".wheather-icon");


async function checkWheather(city){
    let respond=await fetch(URL +city+ `&appid=${APIKEY}`);
    let data=await respond.json();


    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " Km/h";


    if(data.weather[0].main == "Clouds"){
        wheathericon.src="cloud.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        wheathericon.src="drizzle.png";
    }
    else if(data.weather[0].main == "Clear"){
        wheathericon.src="clear.png";
    }
    else if(data.weather[0].main == "Humidity"){
        wheathericon.src="humi.png";
    }
    else if(data.weather[0].main == "Snow"){
        wheathericon.src="snow.jpeg";
    }
    else if(data.weather[0].main == "Wind"){
        wheathericon.src="windd.png";
    }

    document.querySelector(".wheather").style.display="block";
}

searchBtn.addEventListener("click",()=>{
    checkWheather(searchBox.value);
})







