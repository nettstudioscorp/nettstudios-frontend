import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import './css/Home.css';
import sections from './service/HomeVideoList';
import { videos } from '../videos/api/Videoslist.Service';
import {
  playlistsDestaques,
  playlistsEmLançamento,
} from './service/HomePlayList';

import Banner from './img/banner site nettstudios.jpg';

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [episodePage, setEpisodePage] = useState(0);

  const openModal = (videoId) => {
    setCurrentVideoId(videoId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoId('');
  };

  const handleCardClick = (item) => {
    if (item.isPlaylist) {
      navigate(`/playlist/${item.id}`);
    } else if (item.videoId) {
      navigate(`/videos/${item.videoId}`);
    } else {
      navigate(`/videos/${item.id}`);
    }
  };

  const lastGamesSection = sections.find(
    (section) => section.title === 'Últimos Episódios Adicionados'
  );

  const totalItems = lastGamesSection ? lastGamesSection.items.length : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const showLoadMoreButton = totalItems > 24 && currentPage === totalPages;

  const handleEpisodePageClick = (data) => {
    setEpisodePage(data.selected);
  };

  const episodesPerPage = 24;
  const episodesDisplayed = lastGamesSection
    ? lastGamesSection.items.slice(
        episodePage * episodesPerPage,
        (episodePage + 1) * episodesPerPage
      )
    : [];

  return (
    <div className="home-container">
      <div className="banner">
        <img
          src={Banner}
          alt="Banner de Apresentação"
          className="banner-image"
        />
        <div className="banner-text">
          <h2>Bem-vindo ao NettStudios!</h2>
        </div>
      </div>

      {/* ====================== playlistsLançamento ============================ */}

      <section className="playlists-section">
        <h2>Em Lançamento</h2>

        <div className="playlists-grid">
          {playlistsEmLançamento.map((game, index) => (
            <div
              key={game.id}
              className="playlist-card"
              onClick={() => navigate(`/playlist/${game.id}`)}
            >
              <div className="thumbnail-wrapper">
                <img src={game.thumbnail} alt={game.name} />
                {/* <div className="playlist-number">{index + 1}</div> */}
              </div>
              <div className="playlist-info">
                <h3>{game.name}</h3>
                <p>Ver playlist completa</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {sections.map((section, index) => (
        <section key={index} className="anime-section">
          <h2>{section.title}</h2>
          <div className="anime-grid">
            {section.title === 'Últimos Episódios Adicionados'
              ? episodesDisplayed.map((item, idx) => (
                  <div
                    key={idx}
                    className="anime-item"
                    onClick={() => handleCardClick(item)}
                  >
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                ))
              : section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="anime-item"
                    onClick={() => handleCardClick(item)}
                  >
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                ))}
          </div>

          {/* ====================== Últimos Episódios Adicionadoso ============================ */}

          {section.title === 'Últimos Episódios Adicionados' &&
            lastGamesSection && (
              <ReactPaginate
                previousLabel={'<'}
                nextLabel={'Próximo >'}
                breakLabel={'...'}
                pageCount={Math.ceil(
                  lastGamesSection.items.length / episodesPerPage
                )}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handleEpisodePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                previousClassName={'previous'}
                nextClassName={'next'}
                disabledClassName={'disabled'}
              />
            )}
        </section>
      ))}

      {/* ====================== playlistsDestaques ============================ */}

      <section className="playlists-section">
        <h2>Destaques da semana</h2>

        <div className="playlists-grid">
          {playlistsDestaques.map((game, index) => (
            <div
              key={game.id}
              className="playlist-card"
              onClick={() => navigate(`/playlist/${game.id}`)}
            >
              <div className="thumbnail-wrapper">
                <img src={game.thumbnail} alt={game.name} />
                <div className="playlist-number">{index + 1}</div>
              </div>
              <div className="playlist-info">
                <h3>{game.name}</h3>
                <p>Ver playlist completa</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================== Modal ============================ */}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${currentVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
