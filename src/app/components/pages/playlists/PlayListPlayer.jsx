import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPlaylistByGameId } from './service/PlayListPlayer.Service';
import { fetchPlaylists } from './service/PlayList.Service';
import '../playlists/PlaylistPlayer.css';

const PlaylistPlayer = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [recommendations, setRecommendations] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const gamePlaylist = await fetchPlaylistByGameId(gameId);
        setPlaylist(gamePlaylist);

        const allPlaylists = await fetchPlaylists();
        console.log('All Playlists:', allPlaylists);

        const playlistsArray = Object.values(allPlaylists).flat();
        console.log('Playlists Array:', playlistsArray);

        const currentPlaylist = playlistsArray.find(
          (playlist) => playlist.id === gameId
        );
        setDescription(
          currentPlaylist?.description || 'Descrição não disponível.'
        );

        const filteredRecommendations = playlistsArray.filter(
          (playlist) => playlist.id !== gameId
        );
        console.log('Filtered Recommendations:', filteredRecommendations);
        setRecommendations(filteredRecommendations.slice(0, 4));
      } catch (error) {
        console.error('Erro ao buscar playlists:', error);
      }
    };

    fetchPlaylist();
  }, [gameId]);

  const handleVideoChange = (index) => {
    setCurrentVideoIndex(index);
  };

  const formatIndex = (index) => (index < 9 ? `0${index + 1}` : index + 1);

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
      <button className="back-button" onClick={() => navigate('/playlists')}>
        Voltar
      </button>
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

      <div className="game-info">
        <h1>{gameId.toUpperCase()}</h1>
        <p>Total de episódios: {playlist.length}</p>
        <p>Sinopse: {description}</p>
      </div>

      <div className="video-navigation">
        <button className="nav-scroll-button" onClick={() => scrollTo('left')}>
          &lt;
        </button>
        <div className="nav-scroll">
          {playlist.length > 0 ? (
            playlist.map((_, index) => (
              <button
                key={index}
                className={`nav-button ${
                  currentVideoIndex === index ? 'active' : ''
                }`}
                onClick={() => handleVideoChange(index)}
              >
                {formatIndex(index)}
              </button>
            ))
          ) : (
            <span>Nenhum vídeo disponível</span>
          )}
        </div>
        <button className="nav-scroll-button" onClick={() => scrollTo('right')}>
          &gt;
        </button>
      </div>

      <div className="recommendations">
        <h2>Você também pode gostar</h2>
        <div className="playlists-grid">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="playlist-card"
              onClick={() => navigate(`/playlist/${rec.id}`)}
            >
              <div className="thumbnail-wrapper">
                <img src={rec.thumbnail} alt={rec.title} />
              </div>
              <div className="playlist-info">
                <h3>{rec.title}</h3>
                <p>Ver playlist completa</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistPlayer;
