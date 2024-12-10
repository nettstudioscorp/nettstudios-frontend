import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../navbar/images/NettStudios.svg';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controle de login
  const [user, setUser] = useState({
    name: 'Alan Rocha Gomes',
    avatar: 'https://via.placeholder.com/40', // URL padrão do avatar
  });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Simula login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Simula logout
    setUser({});
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            onClick={() => setActiveLink('/')}
          >
            <img src={Logo} alt="Logo" className="logo-image" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveLink('/');
                    closeMenu();
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/playlists"
                  className={`nav-link ${
                    activeLink === '/playlists' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveLink('/playlists');
                    closeMenu();
                  }}
                >
                  Playlists
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/comunidade"
                  className={`nav-link ${
                    activeLink === '/comunidade' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveLink('/comunidade');
                    closeMenu();
                  }}
                >
                  Comunidade
                </Link>
              </li>
            </ul>
            <div className="ms-auto">
              {!isLoggedIn ? (
                <button className="btn btn-primary" onClick={handleLogin}>
                  Entrar
                </button>
              ) : (
                <div className="user-section">
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="user-avatar"
                    onClick={handleLogout}
                  />
                  <p className="user-name">{user.name}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
