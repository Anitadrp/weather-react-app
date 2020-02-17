import React, { useState } from "react";

export default function SearchBar(props) {
  const [city, setCity] = useState("");

  function updateSearch(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (city.trim().length === 0) {
      return;
    }
    props.onSubmit(city);
    setCity("");
  }

  function handleCurrentPosition(event) {
    event.preventDefault();
    props.onCurrentLocationClick();
  }

  return (
    <div className="row input-group search">
      <input
        className="form-control citySearch"
        type="text"
        placeholder="Enter city"
        onChange={updateSearch}
        value={city}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary searchButton"
          type="button"
          id="button-addon2"
          onClick={handleSubmit}
        >
          Search
        </button>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary currentLocation"
            type="button"
            id="button-addon2"
            onClick={handleCurrentPosition}
          >
            MyLoc
          </button>
        </div>
      </div>
    </div>
  );
}
