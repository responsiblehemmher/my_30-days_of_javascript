document.getElementById('get-weather-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    getWeather(city);
});

async function getWeather(city) {
    const apiKey = 'db7ab65db2e114e0fb444537b39e7879'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.cod === 200) {
            const {
                main: { temp, humidity },
                weather: [{ description }],
                wind: { speed },
                name,
                timezone
            } = data;

            // Calculate local time
            const localTime = calculateLocalTime(timezone);

            displayWeather({ name, temp, humidity, description, speed, localTime });
        } else {
            document.getElementById('weather-info').innerHTML = `<p>City not found</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function calculateLocalTime(timezone) {
    const utcOffsetInSeconds = timezone;
    const localDate = new Date(new Date().getTime() + utcOffsetInSeconds * 1000);
    return localDate.toLocaleString(); // Convert to local time string format 
}

function displayWeather({ name, temp, humidity, description, speed, localTime }) {
    const weatherInfo = `
        <h2>Weather in ${name}</h2>
        <p>Local Time: ${localTime}</p>
        <p>Temperature: ${temp}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Condition: ${description}</p>
        <p>Wind Speed: ${speed} m/s</p>
    `;

    document.getElementById('weather-info').innerHTML = weatherInfo;
}
