import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../navbar/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../navbar/images/NettStudios.svg';
import DropdownUserMenu from '../conta/DropdownUserMenu';
import HamburgerIcon from '../navbar/images/hamburger.svg';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
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
    setIsAdmin(false);
    navigate('/login');
  };

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsLoggedIn(authStatus === 'true');

    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === 'alanrochaarg2001@gmail.com') {
      setIsAdmin(true);
    }
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
              <img
                src={HamburgerIcon}
                alt="Menu"
                className="navbar-toggler-icon"
              />
            </button>

            <div
              className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                {/* <li className="nav-item">
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
                </li> */}

                <li className="nav-item">
                  <Link
                    to="/playlists"
                    className={`nav-link ${activeLink === '/playlists' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink('/playlists');
                      closeMenu();
                    }}
                  >
                    {/* Playlists */}
                    Videos
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/lives"
                    className={`nav-link ${activeLink === '/lives' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink('/lives');
                      closeMenu();
                    }}
                  >
                    Lives
                  </Link>
                </li>

                {/*hidden <li className="nav-item">
                  <Link
                    to="/videos"
                    className={`nav-link ${activeLink === '/videos' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink('/videos');
                      closeMenu();
                    }}
                  >
                    Vídeos
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link
                    to="/news"
                    className={`nav-link ${activeLink === '/news' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink('/news');
                      closeMenu();
                    }}
                  >
                    Notícias
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/agenda"
                    className={`nav-link ${activeLink === '/agenda' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink('/agenda');
                      closeMenu();
                    }}
                  >
                    Calendário
                  </Link>
                </li>

                {isLoggedIn && (
                  <>
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

                    {/* TODO: <li className="nav-item">
                      <Link
                        to="/exclusive-videos"
                        className={`nav-link ${activeLink === '/exclusive-videos' ? 'active' : ''}`}
                        onClick={() => {
                          setActiveLink('/exclusive-videos');
                          closeMenu();
                        }}
                      >
                        Reviews
                      </Link>
                    </li> */}

                    {/* TODO: to improve  <li className="nav-item">
                      <Link
                        to="/member"
                        className={`nav-link ${activeLink === '/member' ? 'active' : ''}`}
                        onClick={() => {
                          setActiveLink('/member');
                          closeMenu();
                        }}
                      >
                        Membros
                      </Link>
                    </li> */}
                  </>
                )}

                {/* hidden 
                <li className="nav-item">
                  <Link
                    to="/about"
                    className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink('/about');
                      closeMenu();
                    }}
                  >
                    Sobre Nós
                  </Link>
                </li> */}
              </ul>

              <div className="ms-auto">
                {!isLoggedIn ? (
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
                    isAdmin={isAdmin}
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
