function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = '7e3f21edee540e6110af347b55eb1ab2'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            if (data.cod === 200) {
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;
                const cityName = data.name;
                weatherInfo.innerHTML = `<p>${cityName}: ${temperature}°C, ${weatherDescription}</p>`;

                switch (true) {
                    case temperature >= 0 && temperature <= 10:
                        document.body.style.backgroundImage = "url('https://p1.pxfuel.com/preview/144/394/413/snow-winter-white-cold-weather-ice.jpg')";
                        document.body.style.backgroundRepeat = "no-repeat";
                        break;
                    case temperature >= 11 && temperature <= 20:
                        document.body.style.backgroundImage = "url('https://p1.pxfuel.com/preview/397/265/208/nature-sky-clouds-blue.jpg')";
                        document.body.style.backgroundRepeat = "no-repeat";
                        break;
                    case temperature >= 21 && temperature <= 50:
                        document.body.style.backgroundImage = "url('https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-golden-clouds-after-sunset-free-photo.jpg')";
                        document.body.style.backgroundRepeat = "no-repeat";
                        break;
                    default:
                        break;
                }
            } else {
                weatherInfo.textContent = 'Error fetching weather data. Please try again.';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.textContent = 'Error fetching weather data. Please try again.';
        });
}
