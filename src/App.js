import "./App.css";
import WeatherCard from "./components/weather";
import { useState } from "react";
import { OPEN_WEATHER_API } from "./utils/constants";
import { AddCityCard } from "./components/weather/AddCityCard";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [darkMode, setDarkMode] = useState();

  const deleteWeatherCard = (indexToDelete) => {
    if (window.confirm("Do you want to delete?")) {
      setWeatherData(weatherData.filter((data, idx) => idx !== indexToDelete));
    }
  };

  const handleRefresh = index => {
    fetchWeatherByCity(weatherData[index].name, true, index)
  }

  const fetchWeatherByCity = (city, isRefresh, index) => {
    if (!city) return;
    fetch(`${OPEN_WEATHER_API}&q=${city}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        if (data.cod !== 200) {
          alert("Error: " + data.message);
          return;
        }

        data.updatedAt = new Date()
        const newWeatherData = [...weatherData];
        if(isRefresh) {
          newWeatherData[index] = data
        } else {        
          newWeatherData.push(data)
        }
        setWeatherData(newWeatherData);
      });
  };

  const themeClass = darkMode ? "dark-mode" : "light-mode";

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={themeClass}>
      <h1 className="weather-heading">WeatherApp</h1>
      <button className="center" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="weather-card-container cards-container">
        {weatherData.map((data, index) => (
          <WeatherCard
            key={data.id}
            data={data}
            onDelete={deleteWeatherCard}
            index={index}
            handleRefresh={handleRefresh}
          />
        ))}
        <AddCityCard onSearch={fetchWeatherByCity} />
      </div>
    </div>
  );
}

export default App;
