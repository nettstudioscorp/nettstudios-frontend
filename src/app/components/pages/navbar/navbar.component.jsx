import React, { useState } from "react";
import { Link } from "react-router-dom";
import Submenu from "../navbar/submenu/Submenu";
import "../navbar/navbar.component.css";
import "../../../../index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const submenuItems = {
    videos: [
      { label: "Gameplays", link: "/videos/gameplays" },
      { label: "Exclusive Gameplays", link: "/videos/exclusivegameplays" },
    ],
    news: [{ label: "News sobre Games", link: "/news/games" }],
    podcasts: [{ label: "Podcasts sobre Games", link: "/podcasts/games" }],
    playlists: [{ label: "Gameplays", link: "/playlists/gameplays" }],
    lives: [{ label: "Gameplays", link: "/lives/gameplays" }],
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();

    const formattedTime = `${String(currentHour).padStart(2, "0")}:${String(
      currentMinutes
    ).padStart(2, "0")}`;

    let greeting;
    if (currentHour < 12) {
      greeting = "Bom dia";
    } else if (currentHour < 18) {
      greeting = "Boa tarde";
    } else {
      greeting = "Boa noite";
    }

    return `${greeting}!    •    ${formattedTime}`;
  };

  return (
    <header>
      <div className="topbar">
        <nav>
          <ul>
            <li>
              <a>{`${getGreeting()} `}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="icon">&#9776;</span>
          <span className="menu-text">Menu</span>
        </div>
        <div className="brand">{/* <h1>THENETTKO</h1> */}</div>
        <div className="login">
          <button>Login</button>
        </div>
      </div>
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          X
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Início
              </Link>
            </li>
            <Submenu title="Vídeos" items={submenuItems.videos} />
            <li>
              <a href="https://www.youtube.com/@Nettko/streams" target="blank">
                Lives
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@Nettko" target="blank">
                YouTube
              </a>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                Sobre Nós
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
