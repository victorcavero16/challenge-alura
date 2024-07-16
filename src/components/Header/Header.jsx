import React from "react";
import "./Header.css";
import logo from "./Logo.svg";
import App from "../../App";

function Header() {
  return (
    <header className="header">
      <section className="logoContainer">
        <a href={<App />}>
          <img src={logo} alt="" />
        </a>
      </section>
      <nav className="link"></nav>
    </header>
  );
}

export default Header;
