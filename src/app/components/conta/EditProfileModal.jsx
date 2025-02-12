import React, { useState, useEffect } from 'react';
import '../conta/EditProfileModal.css';

const EditProfileModal = ({ isOpen, onClose, onProfileUpdate, onLogout }) => {
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
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const updatedUser = {
      ...user,
      ...(name && { name }),
      ...(email && { email }),
      ...(password && { password }),
      ...(profilePicture && { profilePicture }),
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/auth/update`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(updatedUser),
        }
      );

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

  // const handleComunidadeRedirect = () => {
  //   window.location.href = '/comunidade';
  // };

  // const handleMembrosRedirect = () => {
  //   window.location.href = '/member';
  // };

  // const handleAgendaRedirect = () => {
  //   window.location.href = '/agenda';
  // };

  // const handleNewRedirect = () => {
  //   window.location.href = '/news';
  // };

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
          <button className="btn btn-warning" onClick={onLogout}>
            Sair
          </button>
          <button className="btn btn-info" onClick={handleAdminRedirect}>
            Admin
          </button>

          {/* <button className="btn btn-info" onClick={handleComunidadeRedirect}>
            Comunidade
          </button>
          <button className="btn btn-info" onClick={handleMembrosRedirect}>
            Membros
          </button>
          <button className="btn btn-info" onClick={handleAgendaRedirect}>
            Agenda
          </button>
          <button className="btn btn-info" onClick={handleNewRedirect}>
            News
          </button> */}

          <button className="btn btn-secondary" onClick={onClose}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
