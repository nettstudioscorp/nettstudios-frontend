import React from 'react';
import { Link } from 'react-router-dom';
import { updates } from './service/updateCenter.service';
import './css/updateCenter.css';

const UpdateCenter = () => {
  return (
    <div className="update-container">
      <header className="update-header">
        <h1>🔔 Central de Atualizações</h1>
        <p>Fique por dentro das últimas atualizações da plataforma.</p>
      </header>
      <div className="updates-list">
        {updates.length === 0 ? (
          <p className="no-updates">
            Não há atualizações disponíveis no momento.
          </p>
        ) : (
          updates.map((update) => (
            <div key={update.id} className="update-card">
              <Link to={`/update/${update.id}`} className="update-link">
                <h2>{update.title}</h2>
                <p>{update.description}</p>
                <p className="update-date">{update.date}</p>
              </Link>

              <a
                href={update.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="download-button"
              >
                📄 PDF
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UpdateCenter;
