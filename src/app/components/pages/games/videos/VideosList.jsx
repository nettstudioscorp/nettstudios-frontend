import React, { useState } from 'react';
import Modal from 'react-modal';
import { videos } from './api/Videoslist.Service';
import '../../games/videos/css/VideosList.css';

const VideosComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFilter, setActiveFilter] = useState('recent');

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

  const filteredVideos = () => {
    switch (activeFilter) {
      case 'recent':
        return [...videos].sort(
          (a, b) =>
            new Date(b.snippet.description.split(' • ')[1]) -
            new Date(a.snippet.description.split(' • ')[1])
        );
      case 'popular':
        return [...videos].sort(
          (a, b) =>
            parseInt(b.snippet.description.split(' ')[0]) -
            parseInt(a.snippet.description.split(' ')[0])
        );
      case 'oldest':
        return [...videos].sort(
          (a, b) =>
            new Date(a.snippet.description.split(' • ')[1]) -
            new Date(b.snippet.description.split(' • ')[1])
        );
      default:
        return videos;
    }
  };

  return (
    <>
      {/* TODO: <div className="buttons-container">
        <button
          className={`filter-button ${
            activeFilter === "recent" ? "active" : ""
          }`}
          onClick={() => handleFilter("recent")}
        >
          Mais recentes
        </button>
        <button
          className={`filter-button ${
            activeFilter === "popular" ? "active" : ""
          }`}
          onClick={() => handleFilter("popular")}
        >
          Em alta
        </button>
        <button
          className={`filter-button ${
            activeFilter === "oldest" ? "active" : ""
          }`}
          onClick={() => handleFilter("oldest")}
        >
          Mais antigo
        </button>
      </div> */}

      <div className="video-grid">
        {filteredVideos().map((video) => (
          <div className="video-item" key={video.id}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              onClick={() => openModal(video)}
            />
            <h3 onClick={() => openModal(video)}>{video.snippet.title}</h3>
            {/* <p className="video-date">{video.snippet.description}</p> */}
          </div>
        ))}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Choose Watch Option"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2>{selectedVideo?.snippet.title}</h2>
          {/* <p>Escolha onde deseja assistir:</p>
          <button
            className="btn btn-external"
            onClick={() =>
              handleWatch(
                `https://www.youtube.com/watch?v=${selectedVideo?.videoId}`
              )
            }
          >
            Assistir no YouTube
          </button> */}
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
    </>
  );
};

export default VideosComponent;
