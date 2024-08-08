"use client";

import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../utils/api';

// Interface for the weather data structure.
interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

// Functional component to display weather information.
const WeatherComponent: React.FC = () => {
  // State to store the weather data.
  const [weather, setWeather] = useState<WeatherData | null>(null);
  // State to indicate whether the data is still loading.
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch weather data when the component mounts.
  useEffect(() => {
    fetchWeather('London')
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // Display a loading message while the data is being fetched.
  if (loading) {
    return <p>Loading...</p>;
  }

  // Display an error message if the data fetch fails.
  if (!weather) {
    return <p>Failed to fetch weather data.</p>;
  }

  // Display the fetched weather data.
  return (
    <div>
      <h1>Weather in London</h1>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Description: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherComponent;
