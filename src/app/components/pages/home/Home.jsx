import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Modal from "react-modal";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import VideoDisplay from "./service/HomeVideoDisplay";
import { videosData, anotherVideoData } from "./service/HomeVideoList";
import Skeleton from "./skeleton/Skeleton";
import "../home/css/Home.css";
import BannerChannel from "../home/img/channel_banner.jpg";

Modal.setAppElement("#root");

const HomeComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
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

  const handleWatch = (url) => {
    window.open(url, "_blank");
    closeModal();
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
          <img
            src={BannerChannel}
            alt="Assassin's Creed Valhalla"
            className="carousel-image"
          />
        </SwiperSlide>
      </Swiper>

      {loading ? (
        <>
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <>
          <VideoDisplay
            title="Recomendados"
            videos={videosData}
            openModal={openModal}
          />
          <VideoDisplay
            title="Vídeos"
            videos={anotherVideoData}
            openModal={openModal}
          />
        </>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Escolha a opção de assistir"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>{selectedVideo?.title}</h2>
        <p>Escolha onde deseja assistir:</p>
        <button
          className="btn btn-external"
          onClick={() =>
            handleWatch(
              `https://www.youtube.com/watch?v=${selectedVideo?.videoId}`
            )
          }
        >
          Assistir no YouTube
        </button>
        <button
          className="btn btn-internal"
          onClick={() => handleWatch(`/watch/${selectedVideo?.videoId}`)}
        >
          Assistir na Página
        </button>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
};

export default HomeComponent;
