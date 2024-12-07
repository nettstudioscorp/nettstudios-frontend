import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateReports } from '../updatesCenter/service/updateReport.service';
import { saveAs } from 'file-saver';
import '../updatesCenter/css/updateReport.css';

const UpdateReport = () => {
  const { id } = useParams();
  const report = updateReports.find((r) => r.id === parseInt(id));

  const [feedback, setFeedback] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

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
      <h1 className="report-title">{report.title}</h1>

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

      {/* TODO:<div className="report-actions">
        <button
          onClick={handleDownload}
          className="download-button"
          aria-label="Baixar relatório em PDF"
        >
          📄 Baixar PDF
        </button>
      </div> */}
    </div>
  );
};

export default UpdateReport;
