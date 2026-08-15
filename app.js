document.addEventListener('DOMContentLoaded', () => {
    const inputCity = document.getElementsByClassName('city-input')
    const getWeather = document.getElementsByClassName('get-weather')
    const error = document.getElementsByClassName('error-message')
    const weatherDetail = document.getElementsByClassName('weather-detail')
    const cityName = document.getElementsByClassName('city-name')
    const tempratureDisplay = document.getElementsByClassName('temprature')
    const descriptionDisplay = document.getElementsByClassName('description')

    getWeather.addEventListener('click', async () => {
        const city = inputCity.value.trim()
        if(!city) return
        try {
            const weatherData = await fetchWeatherData(city)
            displayWeather(weatherData)
        } catch (error) {
            errorMessage()
        }

    })

    async function fetchWeatherData(city) {}

    function displayWeather(weatherData){}

    function errorMessage(){
        weatherDetail.classList.add('hidden')
        error.classList.remove('hidden')
    }

})