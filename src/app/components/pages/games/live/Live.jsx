import React from "react";
import { useNavigate } from "react-router-dom";
import { getGamesListA, getGamesListB } from "./service/Live.service";
import "./css/Live.css";

const Live = () => {
  const navigate = useNavigate();

  // Obter lista de jogos gerais e jogos em destaque
  const featuredA = getGamesListA();
  const featuredB = getGamesListB();

  return (
    <div className="live-container">
      {/* <h2>Todos os Jogos</h2> */}
      <div className="games-list">
        {featuredA.map((game) => (
          <div
            key={game.id}
            className="thumbnail"
            onClick={() => navigate(`/live/${game.id}`)}
          >
            <img src={game.thumbnail} alt={game.name} />
            <p>{game.name}</p>
          </div>
        ))}
      </div>

      {/* <h2>Jogos em Destaque</h2> */}
      <div className="featured-list">
        {featuredB.map((game) => (
          <div
            key={game.id}
            className="thumbnail"
            onClick={() => navigate(`/live/${game.id}`)}
          >
            <img src={game.thumbnail} alt={game.name} />
            <p>{game.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Live;
