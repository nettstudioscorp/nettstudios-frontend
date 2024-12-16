import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { videos } from './api/Videoslist.Service';
import '../videos/css/VideoPlayer.css';

const VideoPlayer = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const index = videos.findIndex((v) => v.videoId === videoId);
    setCurrentVideoIndex(index !== -1 ? index : 0);
  }, [videoId]);

  const handleVideoChange = (index) => {
    setCurrentVideoIndex(index);
  };

  const formatIndex = (index) => {
    return index < 9 ? `0${index + 1}` : `${index + 1}`;
  };

  const currentVideo = videos[currentVideoIndex];

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

  if (!currentVideo) {
    return <div className="video-page-container">Vídeo não encontrado</div>;
  }

  return (
    <div className="player-container">
      <br />
      <br />
      <button className="back-button" onClick={() => navigate('/videos')}>
        Voltar
      </button>

      <div className="video-sidebar">
        {videos.map((v, index) => (
          <div
            key={v.videoId}
            className={`sidebar-item ${
              index === currentVideoIndex ? 'active' : ''
            }`}
          >
            <Link
              to={`/videos/${v.videoId}`}
              onClick={() => handleVideoChange(index)}
            >
              {/* {formatIndex(index)} - {v.title} */}
            </Link>
          </div>
        ))}
      </div>

      <div className="video-content">
        <h1>{currentVideo.title}</h1>

        <div className="video-player">
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
      </div>

      <div className="video-navigation">
        <button className="nav-scroll-button" onClick={() => scrollTo('left')}>
          &lt;
        </button>
        <div className="nav-scroll">
          {videos.map((_, index) => (
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
    </div>
  );
};

export default VideoPlayer;
