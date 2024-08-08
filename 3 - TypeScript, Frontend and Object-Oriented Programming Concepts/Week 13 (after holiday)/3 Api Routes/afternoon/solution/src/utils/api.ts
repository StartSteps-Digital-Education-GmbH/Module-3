import axios from 'axios';

// ------ WEATHER API -------
//  Replace with your actual API key.
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; //  Replace with your actual API key.
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data for a specific city.
export const fetchWeather = async (city: string) => {
  const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);   // Making a GET request to the OpenWeatherMap API with the specified city and API key.
  return response.data;   // Returning the data from the response.
};


// -------- TIME API --------
const TIME_API_URL = 'http://worldtimeapi.org/api/timezone/Europe/London';

// Function to fetch the current time for London.
export const fetchTime = async () => {
  const response = await axios.get(TIME_API_URL);
  return response.data;
};

// -------- JOKE API ---------
const JOKE_API_URL = 'https://v2.jokeapi.dev/joke/Any';

// Function to fetch a random joke.
export const fetchJoke = async () => {
  const response = await axios.get(JOKE_API_URL);
  return response.data;
};
