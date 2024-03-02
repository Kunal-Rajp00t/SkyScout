document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector("#search");
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        getWeather();
    });


    async function getWeather() {
        let cityName = document.querySelector("#city").value;
        const url = "https://goweather.herokuapp.com/weather/" + cityName;
        let promise = await fetch(url);
        let response = await promise.json();
        let temp = response.temperature;
        let ws = response.wind;
        document.getElementById("temp").innerText = temp;
        document.getElementById("windSpeed").innerText = ws;
        document.getElementById("cityN").innerText = cityName;
        document.getElementById("desc").innerText = response.description;
        console.log(response);
        document.getElementById("d1temp").innerText = response.forecast[0].temperature;
        document.getElementById("d1wind").innerText = response.forecast[0].wind;
        document.getElementById("d2temp").innerText = response.forecast[1].temperature;
        document.getElementById("d2wind").innerText = response.forecast[1].wind;
        document.getElementById("d1msg").innerText = response.description;
        document.getElementById("d3temp").innerText = response.forecast[2].temperature;
        document.getElementById("d3wind").innerText = response.forecast[2].wind;
    }
});