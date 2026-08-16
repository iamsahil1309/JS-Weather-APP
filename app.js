document.addEventListener('DOMContentLoaded', () => {
    const inputCity = document.getElementsByClassName('city-input')
    const getWeather = document.getElementsByClassName('get-weather')
    const error = document.getElementsByClassName('error-message')
    const weatherDetail = document.getElementsByClassName('weather-detail')
    const cityName = document.getElementsByClassName('city-name')
    const tempratureDisplay = document.getElementsByClassName('temprature')
    const descriptionDisplay = document.getElementsByClassName('description')

    getWeather.addEventListener('click',async () => {
        const city = inputCity.value.trim()
        if(!city) return
        try {
            const weatherData = await fetchWeatherData(city)
            displayWeatherData(weatherData)
        } catch (error) {
            errorMsg()
        }
    })

    async function fetchWeatherData(city){}

    function displayWeatherData(){}

    function errorMsg(){
        weatherDetail.classList.add('hidden')
        error.classList.remove('hidden')
    }

})