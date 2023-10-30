import React, { useState } from "react";
import "../Style/Nav.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Nav = () => {
  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  // useState(() => {
  //   document.addEventListener("scroll", transitionNav);
  // });

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };
  document.addEventListener("scroll", transitionNav);

  console.log(navBlack);

  const handleClick = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };
  // scroll

  // scroll

  return (
    <div
      className={`nav ${
        navBlack || toggleMenu ? "nav--black" : "nav--transparent"
      } ${toggleMenu && "show"}`}
    >
      <button className="nav_burger" onClick={handleClick}>
        <MenuIcon />
      </button>
      <img src="./images/logo.png" className="nav_logo" alt="Netflix"></img>
      <nav className="nav_links">
        <a href="/" className="nav_link">
          Accueil
        </a>
        <a href="/" className="nav_link">
          Série
        </a>
        <a href="/" className="nav_link">
          films
        </a>
      </nav>
      <div className="nav_actions">
        <a href="/" className="nav_action">
          <SearchIcon />
        </a>
        <a href="/" className="nav_action">
          direct
        </a>
        <a href="/" className="nav_action">
          <CardGiftcardIcon />
        </a>
        <a href="/" className="nav_action">
          <NotificationsIcon />
        </a>
        <a href="/" className="nav_action">
          <img src="./images/avatar.jpg" alt="profil"></img>
        </a>
      </div>
    </div>
  );
};

export default Nav;
