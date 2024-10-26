import React from "react";
import { useNavigate } from "react-router-dom";
import { getGamesList } from "./service/Live.service";
import "./css/Live.css";

const Live = () => {
  const navigate = useNavigate();
  const games = getGamesList();

  return (
    <div className="live-container">
      {games.map((game) => (
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
  );
};

export default Live;
