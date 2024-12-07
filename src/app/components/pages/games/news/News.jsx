import React from "react";
import newsArticles from "../../games/news/service/newsData";
import "../news/css/News.css";

const NewsComponent = () => {
  return (
    <div className="news-container">
      <h1>Tudo Sobre Games: Notícias e Tendências</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      {newsArticles.map((article) => (
        <div key={article.id} className="news-article">
          <h2>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </h2>
          <p>{article.summary}</p>
          <small>{article.date}</small>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
