import React from "react";
import Location from "./Location";
import WeatherItem from "./WeatherItem";
import WeatherData from "./WeatherData";

export default function Weather(props) {
  return (
    <>
      <div className="col location">
        <Location city={props.city} time={props.time} />
      </div>
      <div className="col weatherItem">
        <WeatherItem
          temperature={props.temperature}
          onToggleIsMetric={props.onToggleIsMetric}
          isMetric={props.isMetric}
          icon={props.icon}
          description={props.description}
        />
      </div>
      <div className="col weatherData">
        <WeatherData
          description={props.description}
          wind={props.wind}
          isMetric={props.isMetric}
          humidity={props.humidity}
          realFeel={props.realFeel}
        />
      </div>
    </>
  );
}
