import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import HomeVideoDisplay from './service/HomeVideoDisplay';
import {
  Highlights,
  Recommended,
  Terror,
  Action,
  Adventure,
  Sports,
  MostViewedVideos,
  Race,
} from './service/HomeVideoList';
import Skeleton from './skeleton/Skeleton';
import '../home/css/Home.css';
import { useNavigate } from 'react-router-dom';
import BannerChannel from '../home/img/channel_banner_web.png';
import { Carousel } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Modal.setAppElement('#root');

const VideoSection = ({
  title,
  videos,
  displayedCount,
  setDisplayedCount,
  loadingMore,
  setLoadingMore,
  openModal,
}) => (
  <>
    <h1>{title}</h1>
    <HomeVideoDisplay
      videos={videos.slice(0, displayedCount)}
      openModal={openModal}
    />

    {displayedCount < videos.length && (
      <button
        className="load-more-btn"
        onClick={() => {
          if (loadingMore) {
            setDisplayedCount((prev) => prev + 8);
          } else {
            setDisplayedCount(videos.length); // Exibir todos
          }
          setLoadingMore((prev) => !prev);
        }}
      >
        {loadingMore ? 'Ver Mais' : 'Ver Mais'}
      </button>
    )}

    {loadingMore && displayedCount >= videos.length && (
      <button
        className="load-more-btn"
        onClick={() => {
          setDisplayedCount(4); // Retornar inicial
          setLoadingMore(false);
        }}
      >
        Fechar
      </button>
    )}
    <br />
    <br />
  </>
);

const Home = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bannerVisible, setBannerVisible] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  {
    /* < ==================== Exibir vídeos ===========================> */
  }

  const [displayedVideosHighlights, setDisplayedVideosHighlights] = useState(4);

  const [displayedVideosRecommended, setDisplayedVideosRecommended] =
    useState(4);

  const [displayedVideosSeriesTerror, setDisplayedVideosSeriesTerror] =
    useState(4);

  const [
    displayedVideosvideosDataSerieAction,
    setDisplayedVideosvideosDataSerieAction,
  ] = useState(4);

  const [
    displayedVideosvideosDataSerieAdventure,
    setDisplayedVideosvideosDataSerieAdventure,
  ] = useState(4);

  const [
    displayedVideosvideosDataSerieSports,
    setDisplayedVideosvideosDataSerieSports,
  ] = useState(4);

  const [displayedRace, setDisplayedRace] = useState(4);

  const [displayedMostViewedVideos, setDisplayedMostViewedVideos] = useState(4);

  {
    /* < ==================== Exibir vídeos Fim ===========================> */
  }

  {
    /* < ==================== Carregamento ===========================> */
  }

  const [loadingMoreHighlights, setLoadingMoreHighlights] = useState(false);

  const [loadingMoreRecommended, setLoadingMoreRecommended] = useState(false);

  const [loadingMoreSeriesTerror, setLoadingMoreSeriesTerror] = useState(false);

  const [
    loadingMorevideosDataSerieAction,
    setLoadingMorevideosDataSerieAction,
  ] = useState(false);

  const [
    loadingMorevideosDataSerieAdventure,
    setLoadingMorevideosDataSerieAdventure,
  ] = useState(false);

  const [
    loadingMorevideosDataSerieSports,
    setLoadingMorevideosDataSerieSports,
  ] = useState(false);

  const [loadingMoreRace, setLoadingMoreRace] = useState(false);

  const [loadingMoreMostViewedVideos, setLoadingMoreMostViewedVideos] =
    useState(false);

  {
    /* < ==================== Carregamento Fim ===========================> */
  }

  useEffect(() => {
    const loadData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 0.1);
    };

    loadData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setBannerVisible(window.innerWidth > 480);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideo(null);
  };

  const goToPlaylist = () => {
    navigate('/playlists');
  };

  const goToAllVideos = () => {
    navigate('/videos');
  };

  {
    /* < ==================== Banner ===========================> */
  }

  return (
    <div className="home-container">
      {bannerVisible && (
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/230/814/455/far-cry-primal-wallpaper-preview.jpg"
                className="d-block w-100"
                alt="Far Cry Primal"
              />

              <div className="carousel-caption d-none d-md-block">
                <h5>Far Cry Primal</h5>
                <p>Explore the savage world of Far Cry Primal.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://www.psu.com/wp/wp-content/uploads/2020/10/Assassins-Creed-Valhalla-PS4-PS5-Wallpapers-06.jpg"
                className="d-block w-100"
                alt="Assassin's Creed Valhalla"
              />

              <div className="carousel-caption d-none d-md-block">
                <h5>Assassin's Creed Valhalla</h5>
                <p>Join Eivor on a legendary journey through the Viking Age.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://wallpapercave.com/wp/wp8599453.jpg"
                className="d-block w-100"
                alt="Dead Rising 3 "
              />

              <div className="carousel-caption d-none d-md-block">
                <h5>Dead Rising 3 </h5>
                <p>Get immersed in the post-apocalyptic world.</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>

          {/* < ==================== Banner Fim ===========================> */}
        </div>
      )}

      {loading ? (
        <>
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <>
          <br />
          <br />
          <br />

          <VideoSection
            title="Destaques"
            videos={Highlights}
            displayedCount={displayedVideosHighlights}
            setDisplayedCount={setDisplayedVideosHighlights}
            loadingMore={loadingMoreHighlights}
            setLoadingMore={setLoadingMoreHighlights}
            openModal={openModal}
          />

          <br />
          <br />

          <VideoSection
            title="Recomendados"
            videos={Recommended}
            displayedCount={displayedVideosRecommended}
            setDisplayedCount={setDisplayedVideosRecommended}
            loadingMore={loadingMoreRecommended}
            setLoadingMore={setLoadingMoreRecommended}
            openModal={openModal}
          />

          {/* <h1 className="titlePage">Séries de Assassin's Creed</h1> */}
          <br />
          {/* <h1>Assassin's Creed Valhalla</h1> */}

          <VideoSection
            title="Terror"
            videos={Terror}
            displayedCount={displayedVideosSeriesTerror}
            setDisplayedCount={setDisplayedVideosSeriesTerror}
            loadingMore={loadingMoreSeriesTerror}
            setLoadingMore={setLoadingMoreSeriesTerror}
            openModal={openModal}
          />

          <br />

          <VideoSection
            title="Ação"
            videos={Action}
            displayedCount={displayedVideosvideosDataSerieAction}
            setDisplayedCount={setDisplayedVideosvideosDataSerieAction}
            loadingMore={loadingMorevideosDataSerieAction}
            setLoadingMore={setLoadingMorevideosDataSerieAction}
            openModal={openModal}
          />

          <br />
          <br />

          <VideoSection
            title="Rockstar Games"
            videos={Adventure}
            displayedCount={displayedVideosvideosDataSerieAdventure}
            setDisplayedCount={setDisplayedVideosvideosDataSerieAdventure}
            loadingMore={loadingMorevideosDataSerieAdventure}
            setLoadingMore={setLoadingMorevideosDataSerieAdventure}
            openModal={openModal}
          />
          <br />

          {/* <VideoSection
            title="Esportes"
            videos={Sports}
            displayedCount={displayedVideosvideosDataSerieSports}
            setDisplayedCount={setDisplayedVideosvideosDataSerieSports}
            loadingMore={loadingMorevideosDataSerieSports}
            setLoadingMore={setLoadingMorevideosDataSerieSports}
            openModal={openModal}
          />
          <br /> */}

          {/* <VideoSection
            title="Corrida"
            videos={Race}
            displayedCount={displayedRace}
            setDisplayedCount={setDisplayedRace}
            loadingMore={loadingMoreRace}
            setLoadingMore={setLoadingMoreRace}
            openModal={openModal}
          />

          <br /> */}

          {/* <VideoSection
            title="Vídeos mais acessados"
            videos={MostViewedVideos}
            displayedCount={displayedMostViewedVideos}
            setDisplayedCount={setDisplayedMostViewedVideos}
            loadingMore={loadingMoreMostViewedVideos}
            setLoadingMore={setLoadingMoreMostViewedVideos}
            openModal={openModal}
          /> */}
          <br />
          <br />
          <br />
        </>
      )}

      {/* < ==================== MODAL ===========================> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Player"
        className="modal-home"
        overlayClassName="modal-overlay"
      >
        <h2>{selectedVideo?.title}</h2>

        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${selectedVideo?.videoId}`}
          title={selectedVideo?.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* TODO: <button className="bt-close" onClick={closeModal}>
          Fechar
        </button> */}

        <br />
        <br />

        <div className="button-container">
          <button className="bt-playlist" onClick={goToPlaylist}>
            Playlists
          </button>

          {/* <button className="bt-videos" onClick={goToAllVideos}>
            Videos
          </button> */}

          <button className="bt-close" onClick={closeModal}>
            Fechar
          </button>
        </div>
      </Modal>

      {/* < ==================== MODAL-FIM ===========================> */}
    </div>
  );
};

export default Home;
