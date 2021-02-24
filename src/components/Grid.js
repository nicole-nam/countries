import React from "react";
import Card from "./Card";

function Grid({ isLoading, filter }) {
  return isLoading ? (
    <h1 className="loading-message">loading...</h1>
  ) : (
    <div className="card-box">
      {filter.map((item) => (
        <Card key={item.name} item={item} />
      ))}
    </div>
  );
}

export default Grid;
