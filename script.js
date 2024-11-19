// Define all variables
const apiKey = '__API_KEY__';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'; // OpenWeather API

window.onload = () => {
    const weatherForm = document.getElementById('weather-form');
    const cityInput = document.getElementById('city');
    const unitToggle = document.getElementById('unit-toggle');
    const nameInput = document.getElementById('name');
    const weatherResult = document.getElementById('weather-result');
    const userNameSpan = document.getElementById('user-name');
    
    // Check if the user has previously entered their name
    if (localStorage.getItem('userName')) {
        userNameSpan.textContent = localStorage.getItem('userName');
        nameInput.value = localStorage.getItem('userName');  
    }

    // Check if the user has previously searched for a city
    if (sessionStorage.getItem('city')) {
        cityInput.value = sessionStorage.getItem('city'); 
    }

    // Check if there are any saved weather results in localStorage
    const savedResults = JSON.parse(localStorage.getItem('weatherResults')) || [];

    // Display all saved weather results on page load
    if (savedResults.length > 0) {
        savedResults.forEach((result) => {
            displayWeather(result); // Display simplified weather data
        });
    }

    // Handle form submission
    weatherForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const city = cityInput.value;
        const unit = unitToggle.value;
        const userName = nameInput.value;
        
        // Save the user's name in localStorage
        localStorage.setItem('userName', userName);
        userNameSpan.textContent = userName;

        // Save the city in sessionStorage
        sessionStorage.setItem('city', city);

        // Fetch weather data
        try {
            const response = await fetch(`${apiUrl}?q=${city}&units=${unit}&appid=${apiKey}`);
            if (!response.ok) {
                throw new Error('City not found!');
            }
            const data = await response.json();
            
            // Display the new weather data
            const simplifiedData = {
                city: data.name,
                temperature: data.main.temp,
                weather: data.weather[0].description,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed
            };
            
            displayWeather(simplifiedData); // Pass the simplified weather data
            
            // Save the new result to the localStorage array
            savedResults.push(simplifiedData); // Add the simplified result to the array

            // Save the updated array back to localStorage
            localStorage.setItem('weatherResults', JSON.stringify(savedResults));
        } catch (error) {
            weatherResult.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });

    // Function to display the weather data
    function displayWeather(data) {
        const weatherDetails = `
            <p><strong>City:</strong> ${data.city}</p>
            <p><strong>Temperature:</strong> ${data.temperature}°</p>
            <p><strong>Weather:</strong> ${data.weather}</p>
            <p><strong>Humidity:</strong> ${data.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.windSpeed} m/s</p>
        `;
        weatherResult.innerHTML = weatherDetails;
    }
};




