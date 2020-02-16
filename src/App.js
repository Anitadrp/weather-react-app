import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Forecast from "./components/Forecast";
import Weather from "./components/Weather";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="container">
      <div className="row searchComponents">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBar />
      </div>
      <div className="row weatherComponents">
        <Weather
          city="lagoa"
          time="Saturday, 15 February"
          temperature="17"
          isMetric={true}
          iconUrl={logo}
          description="cloudy"
          wind="13"
          humidity="55"
          realFeel="13"
        />
      </div>
      <div className="row forecastComponents">
        <Forecast
          items={[
            {
              temperature: "25 C",
              time: "12:00",
              iconUrl: "something"
            },
            {
              temperature: "25 C",
              time: "14:00",
              iconUrl: "something"
            },
            {
              temperature: "25 C",
              time: "16:00",
              iconUrl: "something"
            },
            {
              temperature: "17 C",
              time: "18:00",
              iconUrl: "something"
            },
            {
              temperature: "25 C",
              time: "20:00",
              iconUrl: "something"
            },
            {
              temperature: "25 C",
              time: "12:00",
              iconUrl: "something"
            }
          ]}
        />
      </div>
    </div>
  );
}

export default App;
