import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../playlists-games/Playlist.css";
import { playlists } from "../service/playlist.service";

const Playlist = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const navigate = useNavigate();

  const handleViewPlaylist = (id) => {
    navigate(`/playlist/${id}`);
  };

  const handlePlaylistClick = (id) => {
    setSelectedPlaylist(id === selectedPlaylist ? null : id);
  };

  return (
    <div className="playlist-container">
      {playlists.map((playlist) => (
        <div
          key={playlist.id}
          className="playlist-card"
          onClick={() => handlePlaylistClick(playlist.id)}
        >
          <img
            src={playlist.image}
            alt={playlist.title}
            className="playlist-image"
          />
          <div className="playlist-info">
            <h3>{playlist.title}</h3>
            <p>{playlist.videos} videos</p>
            <button
              className="view-playlist-button"
              onClick={(e) => {
                e.stopPropagation();
                handleViewPlaylist(playlist.id);
              }}
            >
              Ver playlist completa
            </button>
          </div>

          {selectedPlaylist === playlist.id && (
            <div className="playlist-list">
              <p>Show video list here...</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Playlist;
