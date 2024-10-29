import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css";
import Logo from "../navbar/images/logo.jpg";

const Navbar = ({ onLogout }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const searchInputRef = useRef(null);

  const popularSearches = [
    "Assassin's Creed Valhalla",
    "Assassin's Creed III Remastered",
    "FarCry 4",
    "The Evil Within",
    "Outlast",
    "DYING LIGHT",
    "RESIDENT EVIL 7",
  ];

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchTerm("");
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleSearch = () => {
    const allTitles = document.querySelectorAll("h1");
    let found = false;

    allTitles.forEach((title) => {
      if (
        title.textContent
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            searchTerm
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      ) {
        title.scrollIntoView({ behavior: "smooth" });
        setIsSearchOpen(false);
        found = true;
      }
    });

    if (!found) {
      alert("Título não encontrado.");
    }
  };

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
          {/* TODO: <Link target="blank" to="https://www.youtube.com/@Nettko"> */}
          <Link target="blank" to="/"></Link>
          <img src={Logo} alt="Logo" className="logo-image" />
        </div>
        {/* TODO: <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          &#9776; Menu
        </button> */}
        <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          {/* TODO: <Link
            to="/"
            className={activeLink === "/" ? "active" : ""}
            onClick={() => setActiveLink("/")}
          >
            Inicio
          </Link> */}
          {/* <Link
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
          </Link> */}
        </nav>
        <div className={`search-area ${isMobileMenuOpen ? "hidden" : ""}`}>
          {isSearchOpen && (
            <div className="search-modal">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={searchInputRef}
                className="search-input"
                placeholder="Digite o título"
              />
              <button onClick={handleSearch}>Buscar</button>
              <div className="search-history">
                {searchTerm && <span>{searchTerm}</span>}
              </div>
              <h3>Buscas Populares:</h3>
              <ul className="search-list">
                {popularSearches.map((search, index) => (
                  <li
                    key={index}
                    className="search-item"
                    onClick={() => setSearchTerm(search)}
                  >
                    {search}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button onClick={toggleSearch}>🔍 Pesquisar</button>
        </div>
        <div className="user-actions">
          {/* <button>Baixar Nettko APK</button> */}
          {/* <Link to="/login">Entrar/Registrar</Link> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
