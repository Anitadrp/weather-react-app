import React, { useState, useEffect } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import Weather from "./components/Weather";
import SearchBar from "./components/SearchBar";
import axios from "axios";

function App() {
  const [city, setCity] = useState({ name: "London" });
  const [isMetric, setIsMetric] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  function handleSearchCity(city) {
    setCity({ name: city });
  }
  function handleCurrentLocationClick() {
    navigator.geolocation.getCurrentPosition(currentPositionCoords);
  }
  function currentPositionCoords(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setCity({ latitude, longitude });
  }

  function handleToggleIsMetric() {
    setIsMetric(!isMetric);
  }

  function handleWeather(response) {
    const date = new Date(response.data.dt * 1000);
    setWeatherData({
      city: response.data.name,
      time: `${date.toLocaleDateString()} ${date
        .toLocaleTimeString()
        .slice(0, 5)}`,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      realFeel: response.data.main.feels_like
    });
    console.log(response);
  }

  function handleForecast(response) {
    setForecastData(
      response.data.list.slice(0, 6).map(item => ({
        temperature: item.main.temp,
        time: item.dt_txt,
        icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        description: item.weather[0].description
      }))
    );
    console.log(response);
  }

  useEffect(() => {
    const apiKey = "3fceae23dde22994db28dbf0244f6a96";

    if (city.name) {
      const weatherCity = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&units=metric&appid=${apiKey}`;
      const forecastCity = `https://api.openweathermap.org/data/2.5/forecast?q=${city.name}&units=metric&appid=${apiKey}`;
      axios.get(weatherCity).then(handleWeather);
      axios.get(forecastCity).then(handleForecast);
    } else {
      const weatherCityCoordinates = `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${apiKey}`;
      const forecastCityCoordinates = `https://api.openweathermap.org/data/2.5/forecast?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${apiKey}`;
      axios.get(weatherCityCoordinates).then(handleWeather);
      axios.get(forecastCityCoordinates).then(handleForecast);
    }
  }, [city]);

  return (
    <div className="container">
      <div className="row searchComponents">
        <SearchBar
          onSubmit={handleSearchCity}
          onCurrentLocationClick={handleCurrentLocationClick}
        />
      </div>
      <div className="row weatherComponents">
        {weatherData && (
          <Weather
            city={weatherData.city}
            time={weatherData.time}
            temperature={weatherData.temperature}
            onToggleIsMetric={handleToggleIsMetric}
            isMetric={isMetric}
            icon={weatherData.icon}
            description={weatherData.description}
            wind={weatherData.wind}
            humidity={weatherData.humidity}
            realFeel={weatherData.realFeel}
          />
        )}
      </div>
      <div className="row forecastComponents">
        {forecastData && <Forecast items={forecastData} isMetric={isMetric} />}
      </div>
      <p>
        Open source code on
        <a href="https://github.com/Anitadrp/weather-react-app"> GitHub </a>by
        Anitadrp
      </p>
    </div>
  );
}

export default App;
