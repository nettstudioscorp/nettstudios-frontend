// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchNews } from './service/newsData';
// import './css/NewsDetail.css';

// const NewsDetail = () => {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadArticle = async () => {
//       try {
//         const data = await fetchNews(id);
//         setArticle(data);
//       } catch (error) {
//         console.error('Erro ao carregar a notícia:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadArticle();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!article) {
//     return <div>Notícia não encontrada.</div>;
//   }

//   return (
//     <div className="news-detail-container">
//       <h1 className="news-detail-title">{article.title}</h1>
//       <img
//         className="news-detail-image"
//         src={article.image}
//         alt={article.title}
//       />
//       <p className="news-detail-author">
//         Por {article.author || 'Desconhecido'}
//       </p>
//       <p className="news-detail-date">
//         {new Date(article.date).toLocaleDateString() || 'Data inválida'}
//       </p>
//       <p className="news-detail-summary">{article.summary}</p>
//       <p className="news-detail-reading-time">Leitura: {article.readingTime}</p>
//       <div className="news-detail-content">
//         <h2>Conteúdo Completo</h2>
//         <p>{article.fullContent || 'Conteúdo não disponível.'}</p>
//       </div>
//       <div className="news-detail-footer">
//         <h3>Mais Notícias</h3>
//         {/* Aqui você pode adicionar links para outras notícias */}
//       </div>
//     </div>
//   );
// };

// export default NewsDetail;
