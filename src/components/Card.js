import React from "react";

function Card({ item }) {
  return (
    <div>
      <div className="card-item">
        <div className="flag-box">
          <img className="flag" src={item.flag} />
        </div>
        <div className="info-box">
          <h2 className="countryName">{item.name}</h2>
          <p className="info">
            <span>Population:</span> {item.population}
          </p>
          <p className="info">
            <span>Region: </span>
            {item.region}
          </p>
          <p className="info">
            <span>Capital:</span> {item.capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
