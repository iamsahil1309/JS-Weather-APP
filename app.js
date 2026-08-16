document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    weather_api = "bc95536ffe94b5fc5a73f86df61c4ac2";

    getWeatherBtn.addEventListener('click', async() => {
        const city = cityInput.value.trim()
        if(!city) return
        try {
            const weatherData = await fetchWeatherData(city)
            displayWeatherData(weatherData)
            cityInput.value=""
        } catch (error) {
            cityInput.value = "";
            showError()
        }
    })

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weather_api}`
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error('City not found. Try Again!')
        }
        const data = response.json()
        return data
    }

    function displayWeatherData(data) {
        weatherInfo.classList.remove('hidden')
        errorMessage.classList.add('hidden')

        const {name, main, weather} = data
        cityNameDisplay.textContent = `${name}`
        temperatureDisplay.textContent = `Temprature : ${main.temp}`
        descriptionDisplay.textContent = `Description : ${weather[0].description}`

    }

    function showError(){
        weatherInfo.classList.add('hidden')
        errorMessage.classList.remove('hidden')
    }


})