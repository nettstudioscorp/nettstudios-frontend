import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link, useParams } from 'react-router-dom';
import { fetchVideos } from './api/Videoslist.Service';
// import { fetchExclusiveVideos } from './api/MemberExclusiveVideosList.Service';

import '../videos/css/VideosList.css';

const VideosList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const { videoId } = useParams();

  const [activeFilter, setActiveFilter] = useState('recent');
  const [visibleVideos, setVisibleVideos] = useState(18);
  const videosPerLoad = 5;
  const isUserRegistered = localStorage.getItem('isAuthenticated') === 'true';

  // const [exclusiveVideos, setExclusiveVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchVideos();
        setVideos(data);
      } catch (error) {
        console.error('Erro ao carregar vídeos:', error);
      }
    };

    getVideos();
  }, []);

  // useEffect(() => {
  //   const getExclusiveVideos = async () => {
  //     try {
  //       const data = await fetchExclusiveVideos();
  //       setExclusiveVideos(data);
  //     } catch (error) {
  //       console.error('Erro ao carregar vídeos exclusivos:', error);
  //     }
  //   };

  //   getExclusiveVideos();
  // }, []);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideo(null);
  };

  const handleWatch = (url) => {
    window.open(url, '_blank');
    closeModal();
  };

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const loadMoreVideos = () => {
    setVisibleVideos((prev) => prev + videosPerLoad);
  };

  const filteredVideos = () => {
    return videos
      .filter((video) => {
        return !(video.isExclusive && !isUserRegistered);
      })
      .sort((a, b) => {
        switch (activeFilter) {
          case 'recent':
            return (
              new Date(b.snippet.description.split(' • ')[1]) -
              new Date(a.snippet.description.split(' • ')[1])
            );
          case 'popular':
            return (
              parseInt(b.snippet.description.split(' ')[0]) -
              parseInt(a.snippet.description.split(' ')[0])
            );
          case 'oldest':
            return (
              new Date(a.snippet.description.split(' • ')[1]) -
              new Date(b.snippet.description.split(' • ')[1])
            );
          default:
            return 0;
        }
      })
      .slice(0, visibleVideos);
  };

  const hasMoreVideos = videos.length > visibleVideos;

  return (
    <div className="videos-container">
      {videoId ? (
        <div>
          <h2>{videos.find((v) => v.videoId === videoId)?.snippet.title}</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={videos.find((v) => v.videoId === videoId)?.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="video-grid">
          {filteredVideos().length === 0 && !isUserRegistered && (
            <p className="login-message">
              Para acessar vídeos exclusivos, por favor, faça login ou crie uma
              conta.
            </p>
          )}
          {filteredVideos().map((video) => (
            <div className="video-item" key={video.videoId}>
              <Link to={`/videos/${video.videoId}`} className="video-link">
                <div className="video-overlay"></div>
                <div className="play-button"></div>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  loading="lazy"
                />
                <div className="video-status">
                  {video.dub ? 'Dub' : ''} {video.leg ? 'Leg' : ''}{' '}
                  {video.legendado ? 'Legendado' : ''}
                </div>
                <h3>{video.snippet.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}

      {hasMoreVideos && (
        <div className="load-more-container">
          <button className="load-more-button" onClick={loadMoreVideos}>
            Carregar Mais
          </button>
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Choose Watch Option"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>{selectedVideo?.snippet.title}</h2>
        <button
          className="btn-internal"
          onClick={() => handleWatch(`/watch/${selectedVideo?.videoId}`)}
        >
          Assistir
        </button>
        <button className="button-modal-close" onClick={closeModal}>
          Fechar
        </button>
      </Modal>
    </div>
  );
};

export default VideosList;
