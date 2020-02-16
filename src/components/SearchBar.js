import React from "react";

export default function SearchBar(props) {
  return (
    <div className="row input-group search">
      <input
        className="form-control citySearch"
        type="text"
        placeholder="Enter city"
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary searchButton"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary currentLocation"
            type="button"
            id="button-addon2"
          >
            MyLoc
          </button>
        </div>
      </div>
    </div>
  );
}
