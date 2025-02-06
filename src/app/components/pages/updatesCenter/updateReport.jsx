import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateReports } from '../updatesCenter/service/updateReport.service';
import '../updatesCenter/css/updateReport.css';

const UpdateReport = () => {
  const { id } = useParams();
  const report = updateReports.find((r) => r.id === parseInt(id));

  const [feedback, setFeedback] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  if (!report) {
    return <p className="error-message">Relatório não encontrado.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => setFeedbackSubmitted(false), 3000); // Feedback visível por 3 segundos
    setFeedback('');
  };

  return (
    <div className="report-container">
      <h1 className="report-title">{report.title}</h1>
      <p className="report-date">Data: {report.date}</p>

      <div className={`report-content ${isExpanded ? 'expanded' : ''}`}>
        <p>{report.content}</p>
      </div>
      {report.content.length > 100 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="toggle-button"
          aria-label={isExpanded ? 'Ver Menos' : 'Ver Mais'}
        >
          {isExpanded ? 'Ver Menos' : 'Ver Mais'}
        </button>
      )}

      <div className="report-actions">
        <a
          href={report.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="download-button"
          aria-label="Baixar relatório em PDF"
        >
          📄 Baixar PDF
        </a>
      </div>

      {/* <form onSubmit={handleSubmit} className="feedback-form">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Deixe seu feedback sobre o relatório..."
        />
        <button className="download-button" type="submit">
          Enviar Feedback
        </button>
      </form>
      {feedbackSubmitted && (
        <p className="feedback-success">Obrigado pelo seu feedback!</p>
      )} */}
    </div>
  );
};

export default UpdateReport;
