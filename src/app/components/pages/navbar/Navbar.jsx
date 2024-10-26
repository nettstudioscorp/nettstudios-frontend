import React, { useState } from "react";
import { Link } from "react-router-dom";
import Submenu from "../navbar/submenu/Submenu";
import "../navbar/Navbar.css";
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
    conteudo1: [
      { label: "Videos", link: "/videos/gameplays" },
      { label: "Playlist", link: "/playlists" },
      { label: "Lives", link: "/live" },
    ],
    conteudo2: [
      { label: "Videos", link: "/videos/ti" },
      { label: "Playlist", link: "/playlists/ti" },
      { label: "Lives", link: "/live/ti" },
    ],
    conteudo3: [
      { label: "Sobre Games", link: "/news/games" },
      { label: "Sobre TI", link: "/news/ti" },
    ],
    conteudo4: [
      { label: "Sobre Games", link: "/podcast/games" },
      { label: "Sobre TI", link: "/podcast/ti" },
    ],
    conteudo5: [
      { label: "Sobre Nós", link: "/about" },
      { label: "Termos de uso", link: "/about/termos" },
      { label: "Política de privacidade", link: "/about/privacidade" },
      { label: "YouTube", link: "https://www.youtube.com/@Nettko" },
    ],
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

            <Submenu title="Games" items={submenuItems.conteudo1} />

            <Submenu title="TI" items={submenuItems.conteudo2} />

            <Submenu title="News" items={submenuItems.conteudo3} />

            <Submenu title="PodCast" items={submenuItems.conteudo4} />

            <Submenu title="Sobre Nós" items={submenuItems.conteudo5} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
