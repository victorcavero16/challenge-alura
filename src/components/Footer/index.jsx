import React from "react";
import "./Footer.css";
import logo from "./Logo.svg";

function Footer() {
  return (
    <footer className="header">
      <section className="logoContainer">
        <a href="">
          <img src={logo} alt="" />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
