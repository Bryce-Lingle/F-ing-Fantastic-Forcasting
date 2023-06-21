var loadedCities = document.getElementById("loaded-cities");
var searchButton = document.getElementById("search-button");
var submitForm = document.getElementById("submit-form");
var input = document.getElementById("input-box");
var date = dayjs();
console.log(date.format("M/DD/YYYY"));



//API Key
const apiKey = "33b8c9634cc3225106e160c2e8335514";
var cityName;
var city_lat;
var city_lon;
var geo_location_api;
var firstURL ="http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apiKey;
var queryURL = "http://api.openweathermap.org/data/2.5/forcast?q=" + city_lat + city_lon + "&appid=" + apiKey;


//setting input to local storage
// function setLocalStorage(event){ 
submitForm.addEventListener("submit",function(event){
    event.preventDefault();
    var inputValue = input.value;
    cityName = inputValue;
    localStorage.setItem("inputValue",inputValue)
    input.value = "";
    getAPI()
    console.log("stored")
})


//Current temp from API call



// 5 day temp from API call

// 5 day widget
var forcast_widget = document.createElement('a');
forcast_widget.setAttribute('class', 'widget');
forcast_widget.setAttribute('id','fiveday');
// forcast_widget.innerHTML = 
//     <div>Date:</div>;
//     <div>Temp: </div>;
//     <div>Wind Speed: </div>;
//     <div>humidity: </div>;




// I want it to connect to API and search for the location
function getAPI(event){
//event.preventDefault();

fetch(firstURL).then(response=>response.json()).then(
    data=>console.log(data)
    // city_lat = ...apiKey data 
    )

// fetch(queryURL)
// var queryURL = "api.openweathermap.org/data/2.5/forcast?q=" + city_lat + city_long + "&appid=" + apiKey;
}
//How do I connect the quesry URL to local storage to tie user input into the weather app? 


// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

