import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './img/logo.svg';
import '../admin/adminHome.css';

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-home-container">
      <div className="logo-title-container">
        {/* TODO: <img src={logo} alt="Logo" className="admin-logo" />
        <h1 className="admin-home-title">ADMIN</h1> */}
      </div>
      <div className="admin-home-sections">
        <div className="admin-home-section">
          <h2>Gerenciar Agenda</h2>
          <button
            className="admin-home-button"
            onClick={() => navigate('/admin/agenda')}
          >
            Administração da Agenda
          </button>
          {/*           
          <button
            className="admin-home-button"
            onClick={() => navigate('/admin/agenda')}
          >
            Criar Evento
          </button> */}
          {/* <button
            className="admin-home-button"
            onClick={() => navigate('/admin/agenda')}
          >
            Editar Agenda
          </button> */}
        </div>

        <div className="admin-home-section">
          <h2>Gerenciar Videos</h2>
          <button
            className="admin-home-button"
            onClick={() => navigate('/admin/videos')}
          >
            Vídeos Exclusivos
          </button>
        </div>

        {/* TODO:  <div className="admin-home-section">
          <h2>Gerenciar catálogo</h2>
          <button
            className="admin-home-button"
            onClick={() => navigate('/admin/videos')}
          >
            Gerenciar Vídeos
          </button>
          <button
            className="admin-home-button"
            onClick={() => navigate('/admin/agenda')}
          >
            Gerenciar Agenda
          </button>
          <button
            className="admin-home-button"
            onClick={() => navigate('/admin/playlists')}
          >
            Gerenciar Playlists
          </button>
          <button
            className="admin-home-button"
            onClick={() => navigate('/admin/lives')}
          >
            Gerenciar Lives
          </button>
          <button
            className="admin-home-button"
            onClick={() => navigate('/admin/news')}
          >
            Gerenciar News
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AdminHome;
