import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchGames } from './service/Live.service';
import './css/Live.css';

const Live = () => {
  const navigate = useNavigate();
  const [gamesA, setGamesA] = useState([]);
  // const [gamesB, setGamesB] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const data = await fetchGames();
        setGamesA(data.listA);
        // setGamesB(data.listB);
      } catch (error) {
        console.error('Erro ao carregar jogos:', error);
      }
    };

    getGames();
  }, []);

  return (
    <div className="live-container">
      {/* gamesA */}

      <div className="games-list">
        {gamesA.map((game) => (
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

      {/* gamesB */}

      {/* <div className="featured-list">
        {gamesB.map((game) => (
          <div
            key={game.id}
            className="thumbnail"
            onClick={() => navigate(`/live/${game.id}`)}
          >
            <img src={game.thumbnail} alt={game.name} />
            <p>{game.name}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Live;
