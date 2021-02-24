import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const [click, setClick] = useState(false);

  function handleClick() {
    document.body.classList.toggle("dark");
    console.log(click);
    click != false ? setClick(false) : setClick(true);
  }

  return (
    <div className="header">
      <h1>Where in the world? </h1>
      <div className="icon-box" onClick={handleClick}>
        <span className="icon">{click === false ? <FaMoon /> : <FaSun />}</span>
        <p className="mode">{click === false ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </div>
  );
}

export default Header;
