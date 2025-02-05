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

  const allPlaylists = [
    {
      items: featured001,
      videoCount: 9 
    },

    {
      items: featured002,
      videoCount: {
        "Assassin's Creed III Remastered": 13,
        "Assassin's Creed Valhalla": 6,
        "Assassin's Creed Rogue": 10
      }
    },

    {
      items: featured003,
      videoCount: 6 
    }
  ];

  return (
    <div className="playlist-container">
      <div className="playlists-grid">
        {allPlaylists.map((playlist) => (
          playlist.items.map((game) => (
            <div
              key={game.id}
              className="playlist-card"
              onClick={() => navigate(`/playlist/${game.id}`)}
            >
              <div className="thumbnail-wrapper">
                <img src={game.thumbnail} alt={game.name} />
                <div className="video-count">
                  <span>▶ {typeof playlist.videoCount === 'object' 
                    ? playlist.videoCount[game.name] 
                    : playlist.videoCount} videos</span>
                </div>
              </div>
              <div className="playlist-info">
                <h3>{game.name}</h3>
                <p>Ver playlist completa</p>
              </div>
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default Playlist;
