import React from "react";
import "../styles/Titlebar.css";

function Titlebar({ title }) {
  return (
    <div id="header__container">
      <h1 id="header__title">{title}</h1>
    </div>
  );
}

export default Titlebar;
