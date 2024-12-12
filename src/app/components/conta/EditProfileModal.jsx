import React, { useState, useEffect } from 'react';
import '../conta/EditProfileModal.css';

const EditProfileModal = ({ isOpen, onClose, onProfileUpdate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setProfilePicture(user.profilePicture || '');
    }
  }, [isOpen]);

  const handleSave = async () => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const updatedUser = {
      ...user,
      ...(name && { name }),
      ...(email && { email }),
      ...(password && { password }),
      ...(profilePicture && { profilePicture }),
    };

    try {
      // const response = await fetch(
      //   'https://user-auth-backend-deploy.onrender.com/api/auth/update',
      //   {
      const response = await fetch('http://localhost:3000/api/auth/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(updatedUser),
      });

      const data = await response.json();

      if (response.ok) {
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
      // const response = await fetch(
      //   'https://user-auth-backend-deploy.onrender.com/api/auth/deleteAccount',
      //   {
      const response = await fetch(
        'http://localhost:3000/api/auth/deleteAccount',
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

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Perfil</h2>

        <div className="form-group">
          <label htmlFor="profilePicture">Foto de Perfil Atual:</label>
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
          <label htmlFor="password">Nova Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Digite a nova senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="modal-buttons">
          <button className="btn btn-primary" onClick={handleSave}>
            Salvar
          </button>
          <button className="btn btn-danger" onClick={handleDeleteAccount}>
            Excluir Conta
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
