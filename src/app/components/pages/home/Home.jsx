import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Modal from "react-modal";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import HomeVideoDisplay from "./service/HomeVideoDisplay";
import {
  videosData,
  videosDataSerieA,
  videosDataDestaques, // Novo conjunto de dados para a seção "Destaques"
  allVideos,
} from "./service/HomeVideoList";
import Skeleton from "./skeleton/Skeleton";
import "../home/css/Home.css";
import BannerChannel from "../home/img/channel_banner.jpg";

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
          setDisplayedCount(4); // Retornar ao estado inicial
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

const HomeComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  // Estados para exibir vídeos
  const [displayedVideosRecommended, setDisplayedVideosRecommended] =
    useState(4);
  const [displayedVideosSeries, setDisplayedVideosSeries] = useState(4);
  const [displayedVideosDestaques, setDisplayedVideosDestaques] = useState(4); // Novo estado para "Destaques"
  const [displayedVideosAll, setDisplayedVideosAll] = useState(4);

  // Estados para carregamento
  const [loadingMoreRecommended, setLoadingMoreRecommended] = useState(false);
  const [loadingMoreSeries, setLoadingMoreSeries] = useState(false);
  const [loadingMoreDestaques, setLoadingMoreDestaques] = useState(false); // Novo estado de carregamento para "Destaques"
  const [loadingMoreAll, setLoadingMoreAll] = useState(false);

  useEffect(() => {
    const loadData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 0.1);
    };

    loadData();
  }, []);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="home-container">
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

      {loading ? (
        <>
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <>
          <VideoSection
            title="Recomendados"
            videos={videosData}
            displayedCount={displayedVideosRecommended}
            setDisplayedCount={setDisplayedVideosRecommended}
            loadingMore={loadingMoreRecommended}
            setLoadingMore={setLoadingMoreRecommended}
            openModal={openModal}
          />

          <VideoSection
            title="Series"
            videos={videosDataSerieA}
            displayedCount={displayedVideosSeries}
            setDisplayedCount={setDisplayedVideosSeries}
            loadingMore={loadingMoreSeries}
            setLoadingMore={setLoadingMoreSeries}
            openModal={openModal}
          />

          {/* Nova Seção para Destaques */}
          <VideoSection
            title="Destaques"
            videos={videosDataDestaques} // Dados para a nova seção
            displayedCount={displayedVideosDestaques}
            setDisplayedCount={setDisplayedVideosDestaques}
            loadingMore={loadingMoreDestaques}
            setLoadingMore={setLoadingMoreDestaques}
            openModal={openModal}
          />

          <VideoSection
            title="Todos os Vídeos"
            videos={allVideos}
            displayedCount={displayedVideosAll}
            setDisplayedCount={setDisplayedVideosAll}
            loadingMore={loadingMoreAll}
            setLoadingMore={setLoadingMoreAll}
            openModal={openModal}
          />
        </>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Player"
        className="modal"
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
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
};

export default HomeComponent;
