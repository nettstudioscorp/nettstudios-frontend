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
  allVideos,
  videosDataSerieA,
} from "./service/HomeVideoList";
import Skeleton from "./skeleton/Skeleton";
import "../home/css/Home.css";
import BannerChannel from "../home/img/channel_banner.jpg";

Modal.setAppElement("#root");

const HomeComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const [displayedVideosRecommended, setDisplayedVideosRecommended] =
    useState(4);
  const [displayedVideosSeries, setDisplayedVideosSeries] = useState(4);
  const [displayedVideosAll, setDisplayedVideosAll] = useState(4);

  const [loadingMoreRecommended, setLoadingMoreRecommended] = useState(false);
  const [loadingMoreSeries, setLoadingMoreSeries] = useState(false);
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

  const handleLoadMore = (section) => {
    if (section === "recommended") {
      if (loadingMoreRecommended) {
        setDisplayedVideosRecommended(8);
      } else {
        setDisplayedVideosRecommended((prev) => prev + 8);
      }
      setLoadingMoreRecommended((prev) => !prev);
    } else if (section === "series") {
      if (loadingMoreSeries) {
        setDisplayedVideosSeries(8);
      } else {
        setDisplayedVideosSeries((prev) => prev + 8);
      }
      setLoadingMoreSeries((prev) => !prev);
    } else if (section === "all") {
      if (loadingMoreAll) {
        setDisplayedVideosAll(100);
      } else {
        setDisplayedVideosAll((prev) => prev + 50);
      }
      setLoadingMoreAll((prev) => !prev);
    }
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
          <br />

          <h1>Recomendados</h1>
          <HomeVideoDisplay
            videos={videosData.slice(0, displayedVideosRecommended)}
            openModal={openModal}
          />
          {displayedVideosRecommended < videosData.length && (
            <button
              className="load-more-btn"
              onClick={() => handleLoadMore("recommended")}
            >
              {loadingMoreRecommended ? "Ver Mais" : "Ver Mais"}
            </button>
          )}
          {loadingMoreRecommended &&
            displayedVideosRecommended >= videosData.length && (
              <button
                className="load-more-btn"
                onClick={() => handleLoadMore("recommended")}
              >
                Fechar
              </button>
            )}

          <br />
          <br />
          <br />
          <br />
          <br />

          <h1>Series</h1>
          <h2>Assassin's Creed Valhalla</h2>
          <HomeVideoDisplay
            videos={videosDataSerieA.slice(0, displayedVideosSeries)}
            openModal={openModal}
          />
          {displayedVideosSeries < videosDataSerieA.length && (
            <button
              className="load-more-btn"
              onClick={() => handleLoadMore("series")}
            >
              {loadingMoreSeries ? "Ver Mais" : "Ver Mais"}
            </button>
          )}
          {loadingMoreSeries &&
            displayedVideosSeries >= videosDataSerieA.length && (
              <button
                className="load-more-btn"
                onClick={() => handleLoadMore("series")}
              >
                Fechar
              </button>
            )}

          <br />
          <br />
          <br />
          <br />
          <br />

          <h1>Todos os Vídeos</h1>
          <HomeVideoDisplay
            videos={allVideos.slice(0, displayedVideosAll)}
            openModal={openModal}
          />
          {displayedVideosAll < allVideos.length && (
            <button
              className="load-more-btn"
              onClick={() => handleLoadMore("all")}
            >
              {loadingMoreAll ? "Ver Mais" : "Ver Mais"}
            </button>
          )}
          {loadingMoreAll && displayedVideosAll >= allVideos.length && (
            <button
              className="load-more-btn"
              onClick={() => handleLoadMore("all")}
            >
              Fechar
            </button>
          )}
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
      </Modal>
    </div>
  );
};

export default HomeComponent;
