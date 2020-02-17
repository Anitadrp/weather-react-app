import React from "react";

export default function ForecastItem(props) {
  let temperature = Math.round(props.temperature);
  if (!props.isMetric) {
    temperature = Math.round((temperature * 9) / 5 + 32);
  }

  return (
    <div className="col-4">
      <p>
        {temperature} {props.isMetric ? "˚C" : "˚F"}
      </p>
      <p>{props.time}</p>
      <img src={props.iconUrl} />
    </div>
  );
}
