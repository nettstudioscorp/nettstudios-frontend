import React from "react";
import newsArticles from "../../news/news-games/service/newsData";
import "../news-games/news.component.css";

const NewsComponent = () => {
  return (
    <div className="news-container">
      <h1>Notícias sobre Games</h1>
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
