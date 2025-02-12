import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlaylistByGameId } from './service/LivePlayer.service';
import './css/LivePlayer.css';

const LivePlayer = () => {
  const { gameId } = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const data = await fetchPlaylistByGameId(gameId);
        setPlaylist(data);
      } catch (error) {
        console.error('Erro ao carregar a playlist:', error);
      }
    };

    fetchPlaylist();
  }, [gameId]);

  const handleVideoChange = (index) => {
    setCurrentVideoIndex(index);
  };

  const formatIndex = (index) => {
    return index < 9 ? `0${index + 1}` : index + 1;
  };

  const currentVideo = playlist[currentVideoIndex];

  const scrollTo = (direction) => {
    const navScroll = document.querySelector('.nav-scroll');
    const maxScrollPosition = navScroll.scrollWidth - navScroll.clientWidth;

    let newScrollPosition =
      scrollPosition + (direction === 'left' ? -200 : 200);

    if (newScrollPosition < 0) {
      newScrollPosition = 0;
    }
    if (newScrollPosition > maxScrollPosition) {
      newScrollPosition = maxScrollPosition;
    }

    setScrollPosition(newScrollPosition);
    navScroll.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="player-container">
      <br />
      <br />
      <button
        className="back-button"
        onClick={() => (window.location.href = '/lives')}
      >
        Voltar
      </button>

      {/* <h1>{gameId.toUpperCase()} - Playlist</h1> */}
      <br />
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
        <button className="nav-scroll-button" onClick={() => scrollTo('left')}>
          &lt;
        </button>
        <div className="nav-scroll">
          {playlist.map((_, index) => (
            <button
              key={index}
              className={`nav-button ${
                currentVideoIndex === index ? 'active' : ''
              }`}
              onClick={() => handleVideoChange(index)}
            >
              {formatIndex(index)}
            </button>
          ))}
        </div>
        <button className="nav-scroll-button" onClick={() => scrollTo('right')}>
          &gt;
        </button>
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
