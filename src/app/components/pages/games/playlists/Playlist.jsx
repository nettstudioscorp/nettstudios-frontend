import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getGamesList001,
  getGamesList002,
  getGamesList003,
  getGamesList004,
  getGamesList005,
} from './service/PlayList.Service';
import './Playlist.css';

const Playlist = () => {
  const navigate = useNavigate();

  const featured001 = getGamesList001();
  const featured002 = getGamesList002();
  const featured003 = getGamesList003();
  const featured004 = getGamesList004();
  const featured005 = getGamesList005();

  return (
    <div className="playlist-container">
      {/* ===================== Seção para Far Cry ========================= */}

      <section className="game-section">
        {/* <h2>Far Cry</h2> */}
        <br />
        <br />
        <br />

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
      </section>

      {/* ======================  Seção para Assassin's Creed ======================*/}

      <section className="game-section">
        {/* <h2>Assassin's Creed</h2> */}
        <div className="games-list">
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
      </section>

      {/* <section className="game-section">
        <h2>Assassin's Creed Valhalla</h2>
        <div className="games-list">
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
      </section> */}

      {/* <section className="game-section">
        <h2>Assassin's Creed Rogue</h2>
        <div className="games-list">
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
      </section> */}

      {/* =================== Seção para Alan Wake ======================*/}

      <section className="game-section">
        {/* <h2>Alan Wake</h2> */}
        <div className="games-list">
          {featured005.map((game) => (
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
      </section>
    </div>
  );
};

export default Playlist;
