import axios from 'axios'; // Importing axios, a library to make HTTP requests.

// ------ WEATHER API -------
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // This is a placeholder for the actual API key from OpenWeatherMap.
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'; // Base URL for the OpenWeatherMap API.

// Function to fetch weather data for a specific city.
export const fetchWeather = async (city: string) => {
  // Making a GET request to the OpenWeatherMap API with the specified city and API key.
  const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  return response.data; // Returning the data from the API response.
};

// -------- TIME API --------
const TIME_API_URL = 'http://worldtimeapi.org/api/timezone/Europe/London'; // URL for the World Time API for London timezone.

// Function to fetch the current time for London.
export const fetchTime = async () => {
  const response = await axios.get(TIME_API_URL); // Making a GET request to the World Time API to fetch the current time.
  return response.data; // Returning the data from the API response.
};

// -------- JOKE API ---------
const JOKE_API_URL = 'https://v2.jokeapi.dev/joke/Any'; // URL for the Joke API that provides random jokes.

// Function to fetch a random joke.
export const fetchJoke = async () => {
  const response = await axios.get(JOKE_API_URL); // Making a GET request to the Joke API to fetch a random joke.
  return response.data; // Returning the data from the API response.
};
