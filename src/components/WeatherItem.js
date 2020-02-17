import React from "react";

export default function WeatherItem(props) {
  let temperature = Math.round(props.temperature);
  if (!props.isMetric) {
    temperature = Math.round((temperature * 9) / 5 + 32);
  }

  return (
    <div>
      <h1>
        {temperature} {props.isMetric ? "˚C" : "˚F"}
      </h1>
      <button onClick={props.onToggleIsMetric}>
        {props.isMetric ? "˚F" : "˚C"}
      </button>
      <img src={props.iconUrl} />
    </div>
  );
}
