import React from "react";
import Card from "./Card";

function Grid({ isLoading, filterCountries, filterRegions }) {
  return isLoading ? (
    <h1 className="loading-message">loading...</h1>
  ) : (
    <div className="card-box">
      {filterCountries.map((country) => (
        <Card key={country.name} item={country} />
      ))}
      {filterRegions.map((country) => (
        <Card key={country.name} item={country} />
      ))}
    </div>
  );
}

export default Grid;
