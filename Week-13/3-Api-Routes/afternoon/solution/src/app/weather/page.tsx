// Import the WeatherComponent from the components folder
import WeatherComponent from '../../components/WeatherComponent';

// Define the WeatherPage functional component
const WeatherPage = () => {
  return (
    <div>
      <h1>Weather Page</h1>
      {/* Render the WeatherComponent */}
      <WeatherComponent />
    </div>
  );
};

export default WeatherPage;
