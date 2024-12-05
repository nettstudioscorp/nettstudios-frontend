import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { fetchVideos } from './api/Videoslist.Service';
import '../../games/videos/css/VideosList.css';

const VideosComponent = () => {
  const [videos, setVideos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // const [activeFilter, setActiveFilter] = useState('recent');

  useEffect(() => {
    const loadVideos = async () => {
      const data = await fetchVideos();
      setVideos(data);
    };
    loadVideos();
  }, []);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideo(null);
  };

  const filteredVideos = () => {
    // TODO: Implemente a lógica de filtros
    return videos;
  };

  return (
    <div className="video-grid">
      {filteredVideos().map((video) => (
        <div className="video-item" key={video.id}>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            onClick={() => openModal(video)}
          />
          <h3 onClick={() => openModal(video)}>{video.snippet.title}</h3>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>{selectedVideo?.snippet.title}</h2>
        <button
          className="btn-internal"
          onClick={() =>
            window.open(`/watch/${selectedVideo?.videoId}`, '_blank')
          }
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

export default VideosComponent;
