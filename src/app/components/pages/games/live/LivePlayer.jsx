import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistByGameId } from "./service/LivePlayer.service";
import "./css/LivePlayer.css";

const LivePlayer = () => {
  const { gameId } = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const gamePlaylist = getPlaylistByGameId(gameId);
    setPlaylist(gamePlaylist);
  }, [gameId]);

  const handleVideoChange = (index) => {
    setCurrentVideoIndex(index);
  };

  const currentVideo = playlist[currentVideoIndex];

  return (
    <div className="player-container">
      <h1>{gameId.toUpperCase()} - Playlist</h1>

      {currentVideo?.videoId ? (
        <div className="video-player-wrapper-live">
          <iframe
            title="YouTube Video Player"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${currentVideo.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <video controls width="560" height="315" src={currentVideo?.url} />
      )}

      <div className="video-info">
        {/* <h2>Temp.</h2>
        <p>Disponível até 5 Mai</p>
        <p>
          <strong>Gênero:</strong> Drama, Horror, Mystery, Sci-Fi, Thriller
        </p>
        <p>
          <strong>Direção:</strong> 
        </p>
        <p className="sinopse">
          <strong>Sinopse:</strong> 
        </p> */}
      </div>

      <div className="video-navigation">
        {playlist.map((_, index) => (
          <button
            key={index}
            className={`nav-button ${
              currentVideoIndex === index ? "active" : ""
            }`}
            onClick={() => handleVideoChange(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="actions">
        {/* <button className="action-button">Favoritado</button>
        <button className="action-button">Upload</button> */}
      </div>

      <div className="recommendations">
        {/* <h3>Você também pode gostar</h3> */}

        <div className="recommendations-list">
          {/* <div className="recommendation-item">Recomendação 1</div>
          <div className="recommendation-item">Recomendação 2</div>
          <div className="recommendation-item">Recomendação 3</div> */}
        </div>
      </div>
    </div>
  );
};

export default LivePlayer;
