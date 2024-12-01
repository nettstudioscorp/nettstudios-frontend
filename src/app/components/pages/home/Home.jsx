import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Modal from "react-modal";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import HomeVideoDisplay from "./service/HomeVideoDisplay";
import {
  videosDataSerieA,
  videosDataSerieB,
  videosDataSerieC,
  videosDataSerieD,
  videosData,
  videosDataDestaques,
  allVideos,
} from "./service/HomeVideoList";
import Skeleton from "./skeleton/Skeleton";
import "../home/css/Home.css";
import BannerChannel from "../home/img/channel_banner_web.png";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

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
        {loadingMore ? "Ver Mais" : "Ver Mais"}
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
  const navigate = useNavigate(); // Hook para navegação
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bannerVisible, setBannerVisible] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //exibir vídeos
  const [displayedVideosRecommended, setDisplayedVideosRecommended] =
    useState(4);
  const [displayedVideosSeries, setDisplayedVideosSeries] = useState(4);
  const [displayedVideosDestaques, setDisplayedVideosDestaques] = useState(4);
  const [displayedVideosvideosDataSerieB, setDisplayedVideosvideosDataSerieB] =
    useState(4);
  const [displayedVideosvideosDataSerieC, setDisplayedVideosvideosDataSerieC] =
    useState(4);
  const [displayedVideosvideosDataSerieD, setDisplayedVideosvideosDataSerieD] =
    useState(4);
  const [displayedVideosAll, setDisplayedVideosAll] = useState(4);

  // carregamento
  const [loadingMoreRecommended, setLoadingMoreRecommended] = useState(false);
  const [loadingMoreSeries, setLoadingMoreSeries] = useState(false);
  const [loadingMorevideosDataSerieB, setLoadingMorevideosDataSerieB] =
    useState(false);
  const [loadingMorevideosDataSerieC, setLoadingMorevideosDataSerieC] =
    useState(false);
  const [loadingMorevideosDataSerieD, setLoadingMorevideosDataSerieD] =
    useState(false);
  const [loadingMoreDestaques, setLoadingMoreDestaques] = useState(false);
  const [loadingMoreAll, setLoadingMoreAll] = useState(false);

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

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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

  // Função para redirecionar para a página de playlists
  const goToPlaylist = () => {
    navigate("/playlist");
  };
  const goToAllVideos = () => {
    navigate("/videos");
  };

  return (
    <div className="home-container">
      {bannerVisible && (
        <Swiper
          spaceBetween={30}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[EffectFade, Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={BannerChannel} alt="Banner" className="carousel-image" />
          </SwiperSlide>
        </Swiper>
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
            videos={videosDataDestaques}
            displayedCount={displayedVideosDestaques}
            setDisplayedCount={setDisplayedVideosDestaques}
            loadingMore={loadingMoreDestaques}
            setLoadingMore={setLoadingMoreDestaques}
            openModal={openModal}
          />

          <br />
          <br />
          <VideoSection
            title="Recomendados"
            videos={videosData}
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
            videos={videosDataSerieA}
            displayedCount={displayedVideosSeries}
            setDisplayedCount={setDisplayedVideosSeries}
            loadingMore={loadingMoreSeries}
            setLoadingMore={setLoadingMoreSeries}
            openModal={openModal}
          />

          <br />

          <VideoSection
            title="Ação"
            videos={videosDataSerieB}
            displayedCount={displayedVideosvideosDataSerieB}
            setDisplayedCount={setDisplayedVideosvideosDataSerieB}
            loadingMore={loadingMorevideosDataSerieB}
            setLoadingMore={setLoadingMorevideosDataSerieB}
            openModal={openModal}
          />
          <br />

          <br />

          <VideoSection
            title="Aventura"
            videos={videosDataSerieC}
            displayedCount={displayedVideosvideosDataSerieC}
            setDisplayedCount={setDisplayedVideosvideosDataSerieC}
            loadingMore={loadingMorevideosDataSerieC}
            setLoadingMore={setLoadingMorevideosDataSerieC}
            openModal={openModal}
          />
          <br />

          <VideoSection
            title="Esportes"
            videos={videosDataSerieD}
            displayedCount={displayedVideosvideosDataSerieD}
            setDisplayedCount={setDisplayedVideosvideosDataSerieD}
            loadingMore={loadingMorevideosDataSerieD}
            setLoadingMore={setLoadingMorevideosDataSerieD}
            openModal={openModal}
          />
          <br />

          <br />
          <VideoSection
            title="Ação/Aventura"
            videos={allVideos}
            displayedCount={displayedVideosAll}
            setDisplayedCount={setDisplayedVideosAll}
            loadingMore={loadingMoreAll}
            setLoadingMore={setLoadingMoreAll}
            openModal={openModal}
          />
          <br />
          <br />
          <br />
        </>
      )}

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
        {/* <button className="bt-close" onClick={closeModal}>
          Fechar
        </button> */}
        <br />
        <br />
        <div className="button-container">
          <button className="bt-playlist" onClick={goToPlaylist}>
            Playlist
          </button>
          <button className="bt-videos" onClick={goToAllVideos}>
            Videos
          </button>
          <button className="bt-close" onClick={closeModal}>
            Fechar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
