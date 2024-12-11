import React, { useEffect, useState } from 'react';
import EditProfileModal from './EditProfileModal';
import './DropdownUserMenu.css';

const DropdownUserMenu = ({ onLogout }) => {
  const [userName, setUserName] = useState('Usuário');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getUserName = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.name) {
      setUserName(user.name);
    } else {
      setUserName('Usuário');
    }
  };

  useEffect(() => {
    getUserName();
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
        <div className="avatar">{userName[0]?.toUpperCase()}</div>
        <span>{userName}</span>
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
