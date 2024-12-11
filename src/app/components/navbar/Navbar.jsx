import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../navbar/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../navbar/images/NettStudios.svg';
import DropdownUserMenu from '../conta/DropdownUserMenu';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/login');
  };

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsLoggedIn(authStatus === 'true');
  }, []);

  return (
    <>
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
                    className={`nav-link ${activeLink === '/playlists' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink('/playlists');
                      closeMenu();
                    }}
                  >
                    Playlists
                  </Link>
                </li>

                {/* TODO: <li className="nav-item">
                  <Link
                    to="/videos"
                    className={`nav-link ${activeLink === '/videos' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink('/videos');
                      closeMenu();
                    }}
                  >
                    Videos
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link
                    to="/comunidade"
                    className={`nav-link ${activeLink === '/comunidade' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink('/comunidade');
                      closeMenu();
                    }}
                  >
                    Comunidade
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/updates"
                    className={`nav-link ${activeLink === '/updates' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink('/updates');
                      closeMenu();
                    }}
                  >
                    Updates
                  </Link>
                </li>
              </ul>

              <div className="ms-auto">
                {!isLoggedIn ? (
                  // <Link to="/login" className="login-button">
                  //   {' '}
                  //   Entrar/Cadrastrar
                  // </Link>
                  <Link
                    to="/login"
                    className={`nav-link ${activeLink === '/login' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink('/login');
                      closeMenu();
                    }}
                  >
                    Entrar/Cadrastrar
                  </Link>
                ) : (
                  <DropdownUserMenu
                    user={JSON.parse(localStorage.getItem('user'))}
                    onLogout={handleLogout}
                  />
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
