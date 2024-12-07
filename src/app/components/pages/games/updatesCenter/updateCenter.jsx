import React from 'react';
import { Link } from 'react-router-dom';
import { updates } from './service/updateCenter.service';
import './css/updateCenter.css';

const UpdateCenter = () => {
  return (
    <div className="update-container">
      <header className="update-header">
        <h1>📢 Central de Atualizações</h1>
        <p>Fique por dentro das últimas atualizações da plataforma.</p>
      </header>
      <div className="updates-list">
        {updates.map((update) => (
          <Link
            to={`/update/${update.id}`}
            key={update.id}
            className="update-card"
          >
            <h2>{update.title}</h2>
            <p>{update.description}</p>
            <p className="update-date">{update.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpdateCenter;
