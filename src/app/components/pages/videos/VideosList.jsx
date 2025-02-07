import React, { useState } from 'react';
import Modal from 'react-modal';
import { videos } from './api/Videoslist.Service';
import '../videos/css/VideosList.css';
import { Link } from 'react-router-dom';

const VideosList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFilter, setActiveFilter] = useState('recent');
  const [visibleVideos, setVisibleVideos] = useState(27);
  const videosPerLoad = 27;

  const isUserRegistered = localStorage.getItem('isAuthenticated') === 'true';

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
      <div className="video-grid">
        {filteredVideos().length === 0 && !isUserRegistered && (
          <p className="login-message">
            Para acessar vídeos exclusivos, por favor, faça login ou crie uma
            conta.
          </p>
        )}
        {filteredVideos().map((video) => (
          <div className="video-item" key={video.id}>
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
