import React, { useEffect, useState } from 'react';
import { fetchNews } from './service/newsData';
import '../news/css/News.css';

const NewsComponent = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        setNewsArticles(data);
      } catch (error) {
        console.error('Erro ao carregar notícias:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const destaques = newsArticles.slice(0, 4);
  const noticias = newsArticles.slice(4);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="news-container">
      <section className="destaques-section">
        <h2 className="section-title">Mais destaques</h2>
        <div className="destaques-grid">
          {destaques.map((article) => (
            <div key={article.id} className="destaque-card">
              {article.image && (
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                </div>
              )}
              <h3>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="noticias-section">
        <h2 className="section-title">Notícias</h2>
        <div className="noticias-list">
          {noticias.map((article) => (
            <div key={article.id} className="noticia-item">
              {article.image && (
                <div className="noticia-image">
                  <img src={article.image} alt={article.title} />
                </div>
              )}
              <div className="noticia-content">
                <div className="noticia-meta">
                  {/* <span className="reading-time">
                    {article.readingTime || '0 minuto'}
                  </span> */}
                  {article.comments && (
                    <span className="comments">
                      {article.comments} comentários
                    </span>
                  )}
                </div>
                <h3>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </h3>
                <p>{article.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsComponent;
