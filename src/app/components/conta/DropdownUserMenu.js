import React, { useEffect, useState } from 'react';
import EditProfileModal from './EditProfileModal';
import './DropdownUserMenu.css';

const DropdownUserMenu = ({ onLogout }) => {
  const [userName, setUserName] = useState('Usuário');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.name) setUserName(user.name);
  }, []);

  const handleProfileUpdate = (updatedUser) => {
    if (updatedUser.name) setUserName(updatedUser.name);
  };

  return (
    <div className="dropdown">
      {/* =========== Botão do Dropdown =========== */}
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="avatar">{userName[0]?.toUpperCase()}</div>
        <span>{userName}</span>
      </button>

      {/* ============= Menu Dropdown ================== */}
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

      {/* ==================== Modal ================= */}
      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProfileUpdate={handleProfileUpdate}
      />
    </div>
  );
};

export default DropdownUserMenu;
