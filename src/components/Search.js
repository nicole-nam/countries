import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search({ getQuery }) {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <FaSearch className="search-icon" />
      <input
        type="text"
        className="input"
        placeholder="Search..."
        value={text}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </section>
  );
}

export default Search;
