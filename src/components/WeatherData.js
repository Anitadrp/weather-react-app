import React from "react";

export default function WeatherData(props) {
  let realFeel = Math.round(props.realFeel);
  let wind = props.wind;
  if (!props.isMetric) {
    realFeel = Math.round((realFeel * 9) / 5 + 32);
    wind = Math.round(wind * 2.237);
  }

  return (
    <div>
      <h2>{props.description}</h2>
      <p>
        Wind speed: <span className="largeValue">{wind}</span>{" "}
        {props.isMetric ? "m/s" : "mph"}
      </p>
      <p>
        Humidity: <span className="largeValue">{props.humidity}</span> %
      </p>
      <p>
        Feels like: <span className="largeValue">{realFeel}</span>
        {props.isMetric ? "˚C" : "˚F"}
      </p>
    </div>
  );
}
