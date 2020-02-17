import React from "react";

export default function ForecastItem(props) {
  return (
    <div className="col-4">
      <p>{props.temperature} ˚C</p>
      <p>{props.time}</p>
      <img src={props.iconUrl} />
    </div>
  );
}
