# Subject: CPNT-262-A(Web Client & Server Programming) 

## Project: cpnt262-api-project

## Author name : Chaital Trivedi

## Attributions
Attribution:
    - Weather data sourced from OpenWeather API (https://openweathermap.org/api).
    - JavaScript code written by [Chaital Trivedi].
    - Inspired by tutorials and documentation from :
        1. [W3 Schools](https://www.w3schools.com/js/default.asp)
        2. [CodeWithHarry](https://www.youtube.com/@CodeWithHarry)
        3. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

    - Core Features:
        * Fetch and display weather data (temperature, humidity, etc.).
        * Store user preferences and weather results using localStorage and sessionStorage.
        * Error handling for invalid city names.

## Pseudo code 

1.	Declare Variables:
    - Define apiKey for accessing the OpenWeather API.
    - Define apiUrl as the base URL for the weather API.
2.	On Page Load:
    - Get references to form elements (weatherForm, cityInput, unitToggle, nameInput, weatherResult, userNameSpan).
3.	Check Local Storage for User Name:
    - If a user name exists in localStorage:
    - Display the stored name in userNameSpan.
    - Pre-fill the name input field (nameInput) with the stored value.
4.	Check Session Storage for City Name:
    - If a city name exists in sessionStorage:
    - Pre-fill the city input field (cityInput) with the stored value.
5.	Check Local Storage for Saved Weather Results:
    - Retrieve saved weather results from localStorage.
    - If saved results exist:
    - Loop through each result.
    - Call a function to display the weather result on the page.
6.	Handle Form Submission:
    - When the form is submitted:
    - Prevent the default form action (page reload).
    - Retrieve values from form inputs (city, unit, userName).
    - Store the user’s name in localStorage.
    - Display the user’s name in userNameSpan.
    - Store the city name in sessionStorage.
 7.	Fetch Weather Data from OpenWeather API:
    - Send an API request to fetch weather data for the city entered by the user.
    - If the API request is successful:
    - Extract relevant data (city name, temperature, weather description, humidity, wind speed).
    - Call a function to display the weather data.
    - Save the result to localStorage for future use.
    - If the API request fails (e.g., invalid city):
    - Display an error message on the page.
8.	Display Weather Data:
    - Create a function displayWeather(data) to show the weather details:
    - Include the city name, temperature, weather description, humidity, and wind speed in the displayed output.
