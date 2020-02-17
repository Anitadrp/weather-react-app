import React from "react";

export default function WeatherData(props) {
  let realFeel = Math.round(props.realFeel);
  if (!props.isMetric) {
    realFeel = Math.round((realFeel * 9) / 5 + 32);
  }
  return (
    <div>
      <h2>{props.description}</h2>
      <p>Wind speed: {props.wind} m/s</p>
      <p>Humidity: {props.humidity} %</p>
      <p>
        Feels like: {realFeel} {props.isMetric ? "˚C" : "˚F"}
      </p>
    </div>
  );
}
