import React from "react";
import ForecastItem from "./ForecastItem";

export default function Forecast(props) {
  return (
    <div className="row">
      {props.items.map((item, index) => (
        <ForecastItem
          key={index}
          temperature={item.temperature}
          time={item.time}
          iconUrl={item.iconUrl}
        />
      ))}
    </div>
  );
}
