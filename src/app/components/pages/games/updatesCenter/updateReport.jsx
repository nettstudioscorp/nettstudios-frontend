import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateReports } from './service/updateReport.service';
import { saveAs } from 'file-saver';
import './css/updateReport.css';

const UpdateReport = () => {
  const { id } = useParams();
  const report = updateReports[id];
  const [feedback, setFeedback] = useState('');

  if (!report) {
    return <p className="error-message">Relatório não encontrado.</p>;
  }

  const handleDownload = () => {
    const blob = new Blob([`${report.title}\n\n${report.content}`], {
      type: 'text/plain;charset=utf-8',
    });
    saveAs(blob, `${report.title}.pdf`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback enviado: ${feedback}`);
    setFeedback('');
  };

  return (
    <div className="report-container">
      <h1>{report.title}</h1>
      <p className="report-content">{report.content}</p>

      <div className="report-actions">
        <button onClick={handleDownload} className="download-button">
          📄 Baixar PDF
        </button>
      </div>

      <div className="feedback-section">
        <h2>📢 Enviar Feedback</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Deixe sua sugestão ou comentário..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateReport;
