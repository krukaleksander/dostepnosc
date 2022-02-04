import React from "react";
import Logo from "../images/logo.png";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="logo bardziej dostępni cyfrowo" />
      <p>Designed by Aleksander Kruk</p>
      <p>© Copyright 2022, All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
