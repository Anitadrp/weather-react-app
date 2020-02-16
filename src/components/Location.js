import React from "react";

export default function Location(props) {
  return (
    <div>
      <h1>{props.city}</h1>
      <h3>{props.time}</h3>
    </div>
  );
}
