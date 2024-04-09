import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [toggel, setToggel] = useState(false);
  let data = ["Home", "About", "Blog", "Contact", "Help"];
  let items = data?.map((item, inx) => (
    <a href="#" key={inx} className="nav__links">
      {item}
    </a>
  ));
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <img src={logo} alt="" />
          </a>
          <div className={`nav__items ${toggel ? "show" : ""}`}>{items}</div>
          <button className="menu__burger" onClick={() => setToggel(!toggel)}>
            <GiHamburgerMenu className="burger" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
