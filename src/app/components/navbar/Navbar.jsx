import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../navbar/images/NettStudios.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo-image" />
          {/* <h1 className="logo-text"></h1> */}
        </div>

        <nav className="nav-links">
          <Link
            to="/"
            className={activeLink === "/" ? "active" : ""}
            onClick={() => setActiveLink("/")}
          >
            Home
          </Link>

          <Link
            to="/videos/gameplays"
            className={activeLink === "/videos/gameplays" ? "active" : ""}
            onClick={() => setActiveLink("/videos/gameplays")}
          >
            Videos
          </Link>

          <Link
            to="/playlists"
            className={activeLink === "/playlists" ? "active" : ""}
            onClick={() => setActiveLink("/playlists")}
          >
            Playlists
          </Link>

          <Link
            to="/live"
            className={activeLink === "/live" ? "active" : ""}
            onClick={() => setActiveLink("/live")}
          >
            Lives
          </Link>

          <Link
            to="/news"
            className={activeLink === "/news" ? "active" : ""}
            onClick={() => setActiveLink("/news")}
          >
            News
          </Link>

          <Link
            to="/story"
            className={activeLink === "/story" ? "active" : ""}
            onClick={() => setActiveLink("/story")}
          >
            Stories
          </Link>

          <Link
            to="/about"
            className={activeLink === "/about" ? "active" : ""}
            onClick={() => setActiveLink("/about")}
          >
            Sobre Nós
          </Link>

          {/* TODO: Em breve <Link
            to="/team"
            className={activeLink === "/team" ? "active" : ""}
            onClick={() => setActiveLink("/team")}
          >
            Equipe
          </Link> */}
        </nav>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          <div className="hamburger-icon"></div>
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <span>Menu</span>
          <button className="close-menu" onClick={toggleMenu}>
            &times;
          </button>
        </div>
        <div className="mobile-nav-links">
          <Link
            to="/"
            onClick={() => {
              setActiveLink("/");
              toggleMenu();
            }}
          >
            Home
          </Link>

          <Link
            to="/videos"
            onClick={() => {
              setActiveLink("/videos");
              toggleMenu();
            }}
          >
            Videos
          </Link>

          <Link
            to="/playlists"
            onClick={() => {
              setActiveLink("/playlists");
              toggleMenu();
            }}
          >
            Playlists
          </Link>

          <Link
            to="/lives"
            onClick={() => {
              setActiveLink("/lives");
              toggleMenu();
            }}
          >
            Lives
          </Link>

          <Link
            to="/news"
            className={activeLink === "/news" ? "active" : ""}
            onClick={() => setActiveLink("/news")}
          >
            News
          </Link>

          <Link
            to="/story"
            className={activeLink === "/story" ? "active" : ""}
            onClick={() => setActiveLink("/story")}
          >
            Stories
          </Link>

          <Link
            to="/about"
            onClick={() => {
              setActiveLink("/about");
              toggleMenu();
            }}
          >
            Sobre Nós
          </Link>
          {/* TODO: Em breve<Link
            to="/team"
            onClick={() => {
              setActiveLink("/team");
              toggleMenu();
            }}
          >
            Equipe
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
