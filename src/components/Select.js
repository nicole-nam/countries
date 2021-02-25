import React, { useState } from "react";

function Select({ getQuery }) {
  const [select, setSelect] = useState("");

  const onChange = (q) => {
    setSelect(q);
    getQuery(q);
  };

  return (
    <select
      className="select-menu"
      onChange={(e) => onChange(e.target.value)}
      value={select}
    >
      <option value="">Select Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
    </select>
  );
}

export default Select;
