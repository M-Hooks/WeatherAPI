var zipcode = document.querySelector("zipcode")

var button = document.querySelector('button')
var temp = document.querySelector('.temp');
var temp1 = document.querySelector('.temp1');
var temp2 = document.querySelector('.temp2');
var temp3 = document.querySelector('.temp3');
var temp4 = document.querySelector('.temp4');
var temp5 = document.querySelector('.temp5');
var temp6 = document.querySelector('.temp6');
var temp7 = document.querySelector('.temp7');


const weatherApi = ("http://api.openweathermap.org/data/2.5/forecast?zip=06516,us&appid=ff69eabbf0ad547f3993a725d704a855") ;
button.addEventListener('click', function weatherAPI(){
fetch(weatherApi)
.then(response => response.json())
  .then(function (data) {
    console.log(data)})
    .then(
        display)
    .catch(err => alert("Zip code is incorrect"))

    })


    function display(data){
       var day1 = (data.list.main.temp);
       console.log(day1)
    }
const DisplayWeather = (weather) => {
        temp.innerText=`Temp:${weather.list[0].main.temp}°F`
        temp1.innerText=`Humidity:${weather.list[0].main.humidity}`
        temp2.innerText=`Feels like:${weather.list[0].main.feels_like}°F`
        temp3.innerText=`Temp_Max:${weather.list[0].main.temp_max}°F`
        temp4.innerText=`Temp_Min:${weather.list[0].main.temp_min}°F`
        temp5.innerText=`Rain:${weather.list[0].weather[0].description}`
        temp6.innerText=`Wind: ${weather.list[0].wind.speed}mph`
        temp7.innerText=`${weather.city.name}`
    }


var weatherMetric = {
    temp: temp.value,
    temp1: temp1.value,
    temp2: temp2.value,
    temp3: temp3.value,
    temp4: temp4.value,
    temp5: temp5.value,
    temp6: temp6.value,
    temp7: temp7.value
  };
