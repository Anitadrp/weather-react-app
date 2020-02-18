import React from "react";

export default function Location(props) {
  return (
    <div>
      <h1>{props.city}</h1>
      <p>{props.time}</p>
    </div>
  );
}
