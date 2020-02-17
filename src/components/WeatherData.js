import React from "react";

export default function WeatherData(props) {
  return (
    <div>
      <h2>{props.description}</h2>
      <p>Wind speed: {props.wind} m/s</p>
      <p>Humidity: {props.humidity} %</p>
      <p>Feels like: {props.realFeel} ˚C</p>
    </div>
  );
}
