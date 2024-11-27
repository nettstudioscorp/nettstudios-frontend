import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../navbar/images/logo2.png";

const Navbar = ({ onLogout }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo-image" />
          </Link>
          <h1 className="logo-text">N e t t S t u d i o s</h1>
        </div>

        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className="hamburger-icon"></span>
        </div>

        <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={activeLink === "/" ? "active" : ""}
            onClick={() => setActiveLink("/")}
          >
            Inicio
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
            Series
          </Link>
          <Link
            to="/live"
            className={activeLink === "/live" ? "active" : ""}
            onClick={() => setActiveLink("/live")}
          >
            Lives
          </Link>
          <Link
            to="/about"
            className={activeLink === "/about" ? "active" : ""}
            onClick={() => setActiveLink("/about")}
          >
            Sobre Nos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
