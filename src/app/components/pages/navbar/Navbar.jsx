import React, { useState } from "react";
import { Link } from "react-router-dom";
import Submenu from "../navbar/submenu/Submenu";
import Logo from "../navbar/images/logo.jpg";
import "../navbar/Navbar.css";
import "../../../../index.css";

const Navbar = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({
    games: false,
    about: false,
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const submenuItems = {
    conteudo1: [
      { label: "Videos", link: "/videos/gameplays" },
      { label: "Playlist", link: "/playlists" },
      { label: "Lives", link: "/live" },
    ],
    conteudo5: [
      { label: "Sobre Nós", link: "/about" },
      { label: "YouTube", link: "https://www.youtube.com/@Nettko" },
    ],
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo-image" />
          </Link>
        </div>
        {/* TODO:<div className="menu-icon" onClick={toggleMenu}>
          <span className="icon">&#9776;</span>
          <span className="menu-text">Menu</span>
        </div> */}
        {/* TODO:<div className="login">
          {!user ? (
            <Link to="/login">Login</Link>
          ) : (
            <div className="user-avatar" onClick={onLogout}>
              <img src={user.avatar} alt="User Avatar" className="avatar" />
              <span>{user.name}</span>
            </div>
          )}
        </div> */}
      </div>
      {/* TODO: <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li className="menu-item">
              <Link to="/" onClick={closeMenu}>
                Início
              </Link>
            </li>
            <li
              onClick={() => toggleSubmenu("games")}
              className={`menu-item ${submenuOpen.games ? "open" : ""}`}
            >
              <span>Games</span>
              {submenuOpen.games && (
                <Submenu
                  title=""
                  items={submenuItems.conteudo1}
                  closeSubmenu={() => toggleSubmenu("games")}
                />
              )}
            </li>
            <li
              onClick={() => toggleSubmenu("about")}
              className={`menu-item ${submenuOpen.about ? "open" : ""}`}
            >
              <span>Sobre Nós</span>
              {submenuOpen.about && (
                <Submenu
                  title=""
                  items={submenuItems.conteudo5}
                  closeSubmenu={() => toggleSubmenu("about")}
                />
              )}
            </li>
          </ul>
        </nav>
      </div> */}
    </header>
  );
};

export default Navbar;
