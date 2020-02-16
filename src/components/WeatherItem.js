import React from "react";

export default function Weather(props) {
  return (
    <div>
      <h1>{props.temperature}</h1>
      <h1>{props.isMetric} ˚C</h1>
      <button>{props.isMetric ? "F" : "C"}</button>
      <img src={props.iconUrl} />
    </div>
  );
}
