import React from 'react';
import { updates } from './service/updateCenter.service';
import './css/updateCenter.css';

const UpdateCenter = () => {
  return (
    <div className="update-container">
      <header className="update-header">
        <h1>📢 Central de Atualizações</h1>
        <p>Fique por dentro das últimas novidades e melhorias da plataforma.</p>
      </header>
      <div className="updates-list">
        {updates.map((update) => (
          <div key={update.id} className="update-card">
            <h2>{update.title}</h2>
            <p>{update.description}</p>
            <p className="update-date">{update.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateCenter;
