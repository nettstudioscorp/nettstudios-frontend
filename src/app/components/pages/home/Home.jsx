import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import HomeVideoDisplay from "./service/HomeVideoDisplay";
import {
  videosData,
  videosDataSerieA,
  videosDataSerieB,
  videosDataDestaques,
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

const HomeComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  //exibir vídeos
  const [displayedVideosRecommended, setDisplayedVideosRecommended] =
    useState(4);
  const [displayedVideosSeries, setDisplayedVideosSeries] = useState(4);
  const [displayedVideosDestaques, setDisplayedVideosDestaques] = useState(4);
  const [displayedVideosvideosDataSerieB, setDisplayedVideosvideosDataSerieB] =
    useState(4);
  const [displayedVideosAll, setDisplayedVideosAll] = useState(4);

  // carregamento
  const [loadingMoreRecommended, setLoadingMoreRecommended] = useState(false);
  const [loadingMoreSeries, setLoadingMoreSeries] = useState(false);
  const [loadingMorevideosDataSerieB, setLoadingMorevideosDataSerieB] =
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
          <br />
          <br />
          <br />
          <b>
            <br />
          </b>
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

          <hr />
          <br />
          <h1 className="titlePage">Todas as Playlists</h1>
          <br />
          {/* TODO: <p>Recomendadas</p> */}
          <br />

          <VideoSection
            title="Assassin's Creed Valhalla"
            videos={videosDataSerieA}
            displayedCount={displayedVideosSeries}
            setDisplayedCount={setDisplayedVideosSeries}
            loadingMore={loadingMoreSeries}
            setLoadingMore={setLoadingMoreSeries}
            openModal={openModal}
          />

          <br />
          <VideoSection
            title="Assassin's Creed III Remastered"
            videos={videosDataSerieB}
            displayedCount={displayedVideosvideosDataSerieB}
            setDisplayedCount={setDisplayedVideosvideosDataSerieB}
            loadingMore={loadingMorevideosDataSerieB}
            setLoadingMore={setLoadingMorevideosDataSerieB}
            openModal={openModal}
          />
          <hr />
          <br />
          <h1 className="titlePage">Todos os Videos</h1>
          <br />
          <VideoSection
            title=""
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
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
        <Link to="/playlists">Playlists</Link>
      </Modal>
    </div>
  );
};

export default HomeComponent;
