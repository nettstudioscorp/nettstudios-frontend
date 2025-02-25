import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import './css/Home.css';
import { fetchVideos } from './service/HomeVideoList';
import { videos } from '../videos/api/Videoslist.Service';
import {
  fetchPlaylistsEmLançamento,
  fetchPlaylistsDestaques,
} from './service/HomePlayList';

import Banner from './img/banner site nettstudios.jpg';

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [episodePage, setEpisodePage] = useState(0);
  const [playlistsLancamento, setPlaylistsLancamento] = useState([]);
  const [playlistsDestaques, setPlaylistsDestaques] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const lancamentoData = await fetchPlaylistsEmLançamento();
      const destaquesData = await fetchPlaylistsDestaques();
      setPlaylistsLancamento(lancamentoData);
      setPlaylistsDestaques(destaquesData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetchVideos();
      setVideos(data);
    };

    getVideos();
  }, []);

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

  const lastGamesSection = videos.find(
    (section) => section.title === 'Últimos Episódios Adicionados'
  );

  const totalItems = lastGamesSection ? lastGamesSection.items.length : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const showLoadMoreButton = totalItems > 15 && currentPage === totalPages;

  const handleEpisodePageClick = (data) => {
    setEpisodePage(data.selected);
  };

  const episodesPerPage = 15;
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
          {playlistsLancamento.map((game, index) => (
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

      {/* ====================== Últimos Episódios Adicionadoso ============================ */}

      {videos.map((section, index) => (
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

      {/* ====================== Seção de Categorias ============================ */}

      <div className="categories-section">
        <h2>Categorias</h2>
        <div className="categories-container">
          <div className="category-card">
            <img
              src="https://meialua.net/wp-content/uploads/2023/10/AC-MIRAGE-CAPA.jpg"
              alt="Ação"
            />
            <span>Ação</span>
          </div>
          <div className="category-card">
            <img
              src="https://www.allkeyshop.com/blog/wp-content/uploads/outlast-film-adaptation.jpg"
              alt="Terror"
            />
            <span>Terror</span>
          </div>
          <div className="category-card">
            <img
              src="https://assets.gamearena.gg/wp-content/uploads/2024/06/13110439/i490784.jpeg"
              alt="Aventura"
            />
            <span>Aventura</span>
          </div>
          <div className="category-card">
            <img
              src="https://store-images.s-microsoft.com/image/apps.11412.68177001893401352.f1516afd-42db-4a47-8385-15f1b976a2c7.df7b35f9-701b-486e-b387-2bd1a69bb816?q=90&w=480&h=270"
              alt="Luta"
            />
            <span>Luta</span>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      {/* ====================== Modal ============================ */}

      {/* TODO:
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
      )} */}
    </div>
  );
};

export default Home;
