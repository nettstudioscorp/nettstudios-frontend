import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPlaylistByGameId } from "./service/PlayListPlayer.Service";
import "../playlists/PlaylistPlayer.css";

const PlaylistPlayer = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Carregar a playlist conforme o gameId
  useEffect(() => {
    const gamePlaylist = getPlaylistByGameId(gameId);
    setPlaylist(gamePlaylist);
  }, [gameId]);

  const handleVideoChange = (index) => {
    setCurrentVideoIndex(index);
  };

  const formatIndex = (index) => (index < 9 ? `0${index + 1}` : index + 1);

  const currentVideo = playlist[currentVideoIndex];

  const scrollTo = (direction) => {
    const navScroll = document.querySelector(".nav-scroll");
    const maxScrollPosition = navScroll.scrollWidth - navScroll.clientWidth;

    let newScrollPosition =
      scrollPosition + (direction === "left" ? -200 : 200);

    // Impede que o scroll ultrapasse o início ou o final da lista
    if (newScrollPosition < 0) {
      newScrollPosition = 0;
    }
    if (newScrollPosition > maxScrollPosition) {
      newScrollPosition = maxScrollPosition;
    }

    setScrollPosition(newScrollPosition);
    navScroll.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="player-container">
      <button className="back-button" onClick={() => navigate("/playlists")}>
        Voltar
      </button>
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

      <div className="video-navigation">
        <button className="nav-scroll-button" onClick={() => scrollTo("left")}>
          &lt;
        </button>
        <div className="nav-scroll">
          {playlist.map((_, index) => (
            <button
              key={index}
              className={`nav-button ${
                currentVideoIndex === index ? "active" : ""
              }`}
              onClick={() => handleVideoChange(index)}
            >
              {formatIndex(index)}
            </button>
          ))}
        </div>
        <button className="nav-scroll-button" onClick={() => scrollTo("right")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PlaylistPlayer;
