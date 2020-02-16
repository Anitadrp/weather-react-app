import React from "react";
import ForecastItem from "./ForecastItem";

export default function Forecast(props) {
  return (
    <div className="row">
      {props.items.map(item => (
        <ForecastItem
          temperature={item.temperature}
          time={item.time}
          iconUrl={item.iconUrl}
        />
      ))}
    </div>
  );
}
