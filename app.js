
let API_key = "35b5d59fcd559189674656ebef05c93d";



let locat = document.querySelector(".location");
let  temperature = document.querySelector(".temp");
let condition = document.querySelector(".cond");
let high = document.querySelector(".high");
let low = document.querySelector(".low");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");
let visibility = document.querySelector(".vis");

let city = "Delhi";


let input = document.querySelector(".input");
 
input.addEventListener("keypress",function(e){
 
  if (e.key === "Enter") {
        let cityName = input.value.trim();
        if (cityName !== "") {
            checkweather(cityName);
            input.value = ""; 
        }
    }
})








function checkweather(city){
    locat.innerHTML = `${city}`;

     fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`)
     .then((res)=>{
        return res.json();
     })
     .then((data)=>{
        let lat = data[0].lat;
        let lon = data[0].lon;
                return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`);

     })
     .then((res)=>{
        return res.json();
     })
     .then((data)=>{
        temperature.innerHTML = `${data.main.temp}°`; 
        condition.innerHTML = `${data.weather[0].description}`;
        high.innerHTML = `HIGH : ${data.main.temp_max}°`;
        low.innerHTML = `LOW : ${data.main.temp_min}°`;
        wind.innerHTML = `${data.wind.speed}km/h`;
        humidity.innerHTML = `${data.main.humidity}%`;
        pressure.innerHTML = `${data.main.pressure}hPa`;
        visibility.innerHTML = `${data.visibility/1000}km`;
        
     })
}


checkweather(city);

