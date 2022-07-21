import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header page__header">
      <img src={logo} alt="лого" className="logo" />
    </header>
  );
}

export default Header;
