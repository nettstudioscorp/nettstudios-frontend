import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DropdownUserMenu = ({ onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userName, setUserName] = useState('Usuário');
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.name) {
      setUserName(user.name);
    }
  }, []);

  const handleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  const handleModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleSaveProfile = () => {
    const updatedName = userName;
    localStorage.setItem(
      'user',
      JSON.stringify({
        ...(JSON.parse(localStorage.getItem('user')) || {}),
        name: updatedName,
      })
    );
    alert('Perfil salvo com sucesso!');
    setIsEditModalOpen(false);
  };

  const handleDeleteAccount = () => {
    const confirmation = window.confirm(
      'Tem certeza de que deseja excluir sua conta?'
    );
    if (confirmation) {
      localStorage.clear();
      alert('Conta excluída com sucesso');
      navigate('/login');
      setUserName('Usuário');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    onLogout();
    setUserName('Usuário');
  };

  return (
    <div className="dropdown">
      {/* ================ Dropdown ============ */}
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        aria-expanded={isDropdownOpen}
        onClick={toggleDropdown}
      >
        {userName}
      </button>

      {isDropdownOpen && (
        <ul className="dropdown-menu show">
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={handleEditProfile}
            >
              Editar Perfil
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={handleDeleteAccount}
            >
              Excluir Conta
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              type="button"
              onClick={handleLogout}
            >
              Sair
            </button>
          </li>
        </ul>
      )}

      {/* ============= Modal  ================ */}

      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Editar Perfil</h3>
            <div>
              <label htmlFor="username">Nome:</label>
              <input
                id="username"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="modal-buttons">
              <button className="btn btn-success" onClick={handleSaveProfile}>
                Salvar
              </button>
              <button className="btn btn-secondary" onClick={handleModalClose}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownUserMenu;
