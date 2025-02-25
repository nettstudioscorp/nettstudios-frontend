import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPlaylists } from './service/PlayList.Service';
import './Playlist.css';

const Playlist = () => {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const getPlaylists = async () => {
      try {
        const data = await fetchPlaylists();
        setPlaylists(data);
      } catch (error) {
        console.error('Erro ao carregar playlists:', error);
      }
    };

    getPlaylists();
  }, []);

  return (
    <div className="playlist-container">
      <div className="playlists-grid">
        {Object.values(playlists)
          .flat()
          .map(
            (game) =>
              game.thumbnail && (
                <div
                  key={game.id}
                  className="playlist-card"
                  onClick={() => navigate(`/playlist/${game.id}`)}
                >
                  <div className="thumbnail-wrapper">
                    <img src={game.thumbnail} alt={game.name} />
                  </div>
                  <div className="playlist-info">
                    <h3>{game.name}</h3>
                    <p>Ver playlist completa</p>
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default Playlist;
