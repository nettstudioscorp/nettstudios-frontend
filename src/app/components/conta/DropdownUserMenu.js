import React, { useEffect, useState } from 'react';
import EditProfileModal from './EditProfileModal';
import './DropdownUserMenu.css';

const DropdownUserMenu = ({ onLogout, isAdmin }) => {
  const [userName, setUserName] = useState('Usuário');
  const [profilePicture, setProfilePicture] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  const getUserName = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.name) {
      setUserName(user.name);
      setProfilePicture(user.profilePicture || '');
    } else {
      setUserName('Usuário');
    }
  };

  useEffect(() => {
    getUserName();
    const now = new Date();
    setCurrentTime(
      now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );

    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleProfileUpdate = () => {
    getUserName();
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {profilePicture ? (
          <img src={profilePicture} alt="Foto de Perfil" className="avatar" />
        ) : (
          <div className="avatar">{userName[0]?.toUpperCase()}</div>
        )}
        <span>{userName}</span>
        <span className="user-time">{currentTime}</span>
      </button>

      <ul className="dropdown-menu">
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setIsModalOpen(true)}
          >
            Editar Perfil
          </button>
        </li>

        {isAdmin && (
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => {
                window.location.href = '/admin';
              }}
            >
              Admin
            </button>
          </li>
        )}
        <li>
          <button className="dropdown-item" type="button" onClick={onLogout}>
            Sair
          </button>
        </li>
      </ul>

      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProfileUpdate={handleProfileUpdate}
      />
    </div>
  );
};

export default DropdownUserMenu;
