import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchVideos } from './api/Videoslist.Service';
import '../videos/css/VideoPlayer.css';

const VideoPlayer = () => {
  const navigate = useNavigate();
  const { videoId } = useParams();
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const loadVideos = async () => {
      const videoData = await fetchVideos();
      setVideos(videoData);

      const index = videoData.findIndex((v) => v.videoId === videoId);
      setCurrentVideoIndex(index !== -1 ? index : 0);
    };

    loadVideos();
  }, [videoId]);

  const handleVideoChange = (index) => {
    setCurrentVideoIndex(index);
  };

  const formatIndex = (index) => {
    return index < 9 ? `0${index + 1}` : `${index + 1}`;
  };

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

  if (!videos.length || currentVideoIndex === null) {
    return <div className="video-page-container">Carregando Player...</div>;
  }

  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="player-container">
      <br />
      <br />
      <button className="back-button" onClick={() => navigate('/videos')}>
        Voltar
      </button>
      <br />
      <div className="video-sidebar">
        {videos.map((v, index) => (
          <div
            key={v.videoId}
            className={`sidebar-item ${index === currentVideoIndex ? 'active' : ''}`}
          >
            <Link
              to={`/videos/${v.videoId}`}
              onClick={() => handleVideoChange(index)}
            >
              {/* {formatIndex(index)} - {v.snippet.title} */}
            </Link>
          </div>
        ))}
      </div>

      <div className="video-content">
        <div className="video-player">
          {currentVideo ? (
            <iframe
              title="YouTube Video Player"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${currentVideo.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="no-video">Nenhum vídeo carregado</div>
          )}
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
              className={`nav-button ${currentVideoIndex === index ? 'active' : ''}`}
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
