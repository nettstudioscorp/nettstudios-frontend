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
              </ul>

              <div className="ms-auto">
                {!isLoggedIn ? (
                  <Link to="/login" className="btn btn-primary">
                    {' '}
                    Entrar
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
