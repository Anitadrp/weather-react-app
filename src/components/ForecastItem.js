import React from "react";

export default function ForecastItem(props) {
  return (
    <div className="col-4">
      <span>{props.temperature}</span>
      <span>{props.time}</span>
      <img src={props.iconUrl} />
    </div>
  );
}
