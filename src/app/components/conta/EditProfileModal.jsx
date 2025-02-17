import React, { useState, useEffect } from 'react';
import '../conta/EditProfileModal.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const EditProfileModal = ({ isOpen, onClose, onProfileUpdate, onLogout }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setProfilePicture(user.profilePicture || '');
    }

    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  const handleSave = async () => {
    const updatedData = {};

    if (name) updatedData.name = name;
    if (email) updatedData.email = email;
    if (profilePicture) updatedData.profilePicture = profilePicture;
    if (newPassword) updatedData.password = newPassword;

    if (Object.keys(updatedData).length === 0) {
      alert('Nenhuma alteração foi feita.');
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/update`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const user = JSON.parse(localStorage.getItem('user')) || {};
        const updatedUser = { ...user, ...updatedData };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        onProfileUpdate(updatedUser);
        alert('Dados atualizados com sucesso!');
        onClose();
      } else {
        alert(data.message || 'Erro ao atualizar os dados');
      }
    } catch (error) {
      alert('Erro no servidor');
    }
  };

  const handleDeleteAccount = async () => {
    const userConfirmation = window.confirm(
      'Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.'
    );
    if (!userConfirmation) {
      return;
    }

    const user = JSON.parse(localStorage.getItem('user')) || {};
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/deleteAccount`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
        onClose();
      } else {
        alert(data.message || 'Erro ao excluir a conta');
      }
    } catch (error) {
      alert('Erro no servidor');
    }
  };

  const handleAdminRedirect = () => {
    window.location.href = '/admin';
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Perfil</h2>

        <div className="form-group">
          <label htmlFor="profilePicture">Foto de Perfil</label>
          {profilePicture && (
            <img
              src={profilePicture}
              alt="Foto de Perfil"
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
          )}
        </div>

        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Digite o novo nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Digite o novo email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="profilePicture">URL da Foto de Perfil</label>
          <input
            type="text"
            id="profilePicture"
            value={profilePicture}
            placeholder="Cole a URL da nova foto de perfil"
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="new-password">Nova Senha</label>
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              id="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite a nova senha"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        <div className="form-group">
          <div className="password-field">
            <label htmlFor="new-password">Confirme sua nova senha!</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Digite a nova senha"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        <div className="modal-buttons">
          <button className="btn btn-primary" onClick={handleSave}>
            Salvar
          </button>
          <button className="btn btn-danger" onClick={handleDeleteAccount}>
            Excluir Conta
          </button>
          <button className="btn btn-warning" onClick={onLogout}>
            Sair
          </button>
          <button className="btn btn-info" onClick={handleAdminRedirect}>
            Admin
          </button>

          <button className="btn btn-secondary" onClick={onClose}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
