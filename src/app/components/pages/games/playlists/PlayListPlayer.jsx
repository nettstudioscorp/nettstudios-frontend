import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PlayListPlayerService from "./service/PlayListPlayer.Service";
import "./PlaylistPlayer.css";

const PlayListPlayer = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedPlaylist = PlayListPlayerService.getPlaylistById(id);
    setPlaylist(fetchedPlaylist);
  }, [id]);

  if (!playlist) {
    return <p>Carregando playlist...</p>;
  }

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="playlist-player-container">
      <div className="header">
        <button className="back-button" onClick={handleBackClick}>
          ← Voltar
        </button>
      </div>

      <div className="content-wrapper">
        <div className="video-list">
          <h3>{playlist.title}</h3>
          <div className="video-list-items">
            {playlist.videos.map((video, index) => (
              <div
                key={index}
                className={`video-item ${
                  index === currentVideoIndex ? "active" : ""
                }`}
                onClick={() => handleVideoClick(index)}
              >
                <div className="video-info">
                  <h4>{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="video-player">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${playlist.videos[currentVideoIndex].videoId}`}
            title={playlist.videos[currentVideoIndex].title}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default PlayListPlayer;
