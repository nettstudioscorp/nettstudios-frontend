import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getGamesList001,
  getGamesList002,
  getGamesList003,
  getGamesList004,
} from './service/PlayList.Service';
import './Playlist.css';

const Playlist = () => {
  const navigate = useNavigate();

  // Obter lista de jogos gerais e jogos em destaque
  const featured001 = getGamesList001();
  const featured002 = getGamesList002();
  const featured003 = getGamesList003();
  const featured004 = getGamesList004();

  return (
    <div className="live-container">
      {/* <h2>Todos os Jogos</h2> */}
      <div className="games-list">
        {featured001.map((game) => (
          <div
            key={game.id}
            className="thumbnail"
            onClick={() => navigate(`/playlist/${game.id}`)}
          >
            <img src={game.thumbnail} alt={game.name} />
            <p>{game.name}</p>
          </div>
        ))}
      </div>

      {/* <h2>Jogos em Destaque</h2> */}
      <div className="featured-list">
        {featured002.map((game) => (
          <div
            key={game.id}
            className="thumbnail"
            onClick={() => navigate(`/playlist/${game.id}`)}
          >
            <img src={game.thumbnail} alt={game.name} />
            <p>{game.name}</p>
          </div>
        ))}
      </div>
      <div className="featured-list">
        {featured003.map((game) => (
          <div
            key={game.id}
            className="thumbnail"
            onClick={() => navigate(`/playlist/${game.id}`)}
          >
            <img src={game.thumbnail} alt={game.name} />
            <p>{game.name}</p>
          </div>
        ))}
      </div>
      <div className="featured-list">
        {featured004.map((game) => (
          <div
            key={game.id}
            className="thumbnail"
            onClick={() => navigate(`/playlist/${game.id}`)}
          >
            <img src={game.thumbnail} alt={game.name} />
            <p>{game.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
