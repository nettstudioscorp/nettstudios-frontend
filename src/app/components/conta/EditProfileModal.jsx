import React, { useState, useEffect } from 'react';
import '../conta/EditProfileModal.css';

const EditProfileModal = ({ isOpen, onClose, onProfileUpdate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
    }
  }, [isOpen]);

  const handleSave = () => {
    const user = JSON.parse(localStorage.getItem('user')) || {};

    const updatedUser = {
      ...user,
      ...(name && { name }),
      ...(email && { email }),
      ...(password && { password }),
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));
    onProfileUpdate(updatedUser);
    alert('Dados atualizados com sucesso!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Perfil</h2>
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
          <label htmlFor="password">Nova Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Digite a nova senha "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="modal-buttons">
          <button className="btn btn-primary" onClick={handleSave}>
            Salvar
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
