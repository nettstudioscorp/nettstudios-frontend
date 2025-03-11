import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import YouTube from 'react-youtube';

import './css/Home.css';

import { fetchVideos } from './service/HomeVideoList';
import { videos } from '../videos/api/Videoslist.Service';

import {
  fetchPlaylistsEmLançamento,
  fetchPlaylistsDestaques,
} from './service/HomePlayList';

import { fetchLiveVideos } from '../live/service/Live.service';
import { fetchGames } from '../live/service/Live.service';

import Banner from './img/banner site nettstudios.jpg';

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [loading, setLoading] = useState(false);
  const [episodePage, setEpisodePage] = useState(0);
  const [playlistsLancamento, setPlaylistsLancamento] = useState([]);
  const [playlistsDestaques, setPlaylistsDestaques] = useState([]);
  const [videos, setVideos] = useState([]);
  const [liveVideos, setLiveVideos] = useState([]);
  const [gamesA, setGamesA] = useState([]);

  const banners = [
    Banner,
    'https://assetsio.gnwcdn.com/digitalfoundry-2015-performance-analysis-far-cry-primal-1456407474102.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
    'https://images7.alphacoders.com/132/1326346.jpeg',
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [playerHeight, setPlayerHeight] = useState(390);

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

  useEffect(() => {
    const getLiveVideos = async () => {
      try {
        const data = await fetchLiveVideos();
        setLiveVideos(data);
      } catch (error) {
        console.error('Erro ao carregar vídeos ao vivo:', error);
      }
    };

    const getGames = async () => {
      try {
        const data = await fetchGames();
        setGamesA(data.listA);
      } catch (error) {
        console.error('Erro ao carregar jogos:', error);
      }
    };

    getLiveVideos();
    getGames();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setPlayerHeight(590);
      } else {
        setPlayerHeight(390);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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

  const showLoadMoreButton = totalItems > 18 && currentPage === totalPages;

  const handleEpisodePageClick = (data) => {
    setLoading(true);
    setEpisodePage(data.selected);
  };

  const episodesPerPage = 20;
  const episodesDisplayed = lastGamesSection
    ? lastGamesSection.items.slice(
        episodePage * episodesPerPage,
        (episodePage + 1) * episodesPerPage
      )
    : [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [episodePage]);

  const openPlayer = (videoId) => {
    setCurrentVideoId(videoId);
    setIsPlayerOpen(true);
  };

  const closePlayer = () => {
    setIsPlayerOpen(false);
    setCurrentVideoId('');
  };

  return (
    <div className="home-container">
      {/* ====================== Banner ============================ */}

      <div className="banner">
        <motion.div
          className="banner-wrapper"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={banners[currentBanner]}
            alt="Banner de Apresentação"
            className="banner-image"
            key={currentBanner}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
        <div className="banner-text">
          <h2>Bem-vindo ao NettStudios!</h2>
        </div>
      </div>

      {/* ====================== playlistsLançamento ============================ */}

      <section className="playlists-section" data-aos="fade-up">
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

      {/* ====================== Nova Seção Ao Vivo ============================ */}

      {/* TODO: <section className="live-section">
        <h2>Ao Vivo</h2>
        {liveVideos.length > 0 ? (
          <div className="live-videos-list">
            {liveVideos.slice(0, 4).map((video) => (
              <div key={video.id} className="live-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <p>{video.title}</p>
                {video.isLive && <span className="live-badge">Ao Vivo</span>}
              </div>
            ))}
          </div>
        ) : (
          <div className="games-list">
            {gamesA.slice(0, 4).map((game) => (
              <div
                key={game.id}
                className="thumbnail"
                onClick={() => navigate(`/live/${game.id}`)}
              >
                <img src={game.thumbnail} alt={game.name} />
                <p>{game.name}</p>
              </div>
            ))}
          </div>
        )}
      </section> */}

      {/* ====================== Últimos Episódios Adicionadoso ============================ */}

      {videos.map((section, index) => (
        <section key={index} className="anime-section" data-aos="fade-up">
          <h2>{section.title}</h2>
          <div className="anime-grid">
            {section.title === 'Últimos Episódios Adicionados' ? (
              loading ? (
                <div className="loading" />
              ) : (
                episodesDisplayed.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="anime-item"
                    onClick={() => openPlayer(item.videoId)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                  </motion.div>
                ))
              )
            ) : (
              section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="anime-item"
                  onClick={() => handleCardClick(item)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </motion.div>
              ))
            )}
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

      <section className="playlists-section" data-aos="fade-up">
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

      <div className="categories-section" data-aos="fade-up">
        <h2>Veja mais </h2>

        <div className="categories-container">
          <div
            className="category-card"
            onClick={() => navigate('/categories/playlists')}
          >
            <img
              src="https://files.meiobit.com/wp-content/uploads/2023/02/Embracer-Group-IPs-1060x596.jpg"
              alt="categories"
            />
            <span>Playlists</span>
          </div>

          <div className="category-card" onClick={() => navigate('/videos')}>
            <img src="https://t2.tudocdn.net/223397?w=1920" alt="videos" />
            <span>Videos</span>
          </div>
        </div>
      </div>

      {/* =============== Player de vídeo ================= */}

      {isPlayerOpen && (
        <div className="video-player-modal">
          <div className="video-player-content">
            <button className="close" onClick={closePlayer}>
              X
            </button>
            <YouTube
              videoId={currentVideoId}
              opts={{
                height: playerHeight,
                width: '100%',
                playerVars: {
                  autoplay: 1,
                },
              }}
            />
          </div>
        </div>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
