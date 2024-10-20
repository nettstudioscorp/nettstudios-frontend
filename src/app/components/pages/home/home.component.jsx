import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "../home/home.component.css";

const HomeComponent = () => {
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
            src="https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg"
            alt="Assassin's Creed Valhalla"
            className="carousel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4RKia895j9bcLcVEsLL1PB/dbd31dfe5049a8b65abbe13727d113ef/ac-rogue-heroBanner.jpg"
            alt="Assassin's Creed Rogue"
            className="carousel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
            alt="Batman: Arkham Knight"
            className="carousel-image"
          />
        </SwiperSlide>
      </Swiper>

      <section id="no-cinema" className="movies-section">
        <h2 className="section-title">Playlists</h2>
        <div className="movie-grid">
          <div className="movie-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="Alien: Romulus"
              className="movie-image"
            />
            <h3 className="movie-title">Alien: Romulus</h3>
          </div>
          <div className="movie-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="A Substância"
              className="movie-image"
            />
            <h3 className="movie-title">A Substância</h3>
          </div>
          <div className="movie-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="A Substância"
              className="movie-image"
            />
            <h3 className="movie-title">A Substância</h3>
          </div>
          <div className="movie-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="A Substância"
              className="movie-image"
            />
            <h3 className="movie-title">A Substância</h3>
          </div>
          <div className="movie-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="A Substância"
              className="movie-image"
            />
            <h3 className="movie-title">A Substância</h3>
          </div>
          <div className="movie-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="A Substância"
              className="movie-image"
            />
            <h3 className="movie-title">A Substância</h3>
          </div>
          <div className="movie-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="A Substância"
              className="movie-image"
            />
            <h3 className="movie-title">A Substância</h3>
          </div>
          <div className="movie-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="A Substância"
              className="movie-image"
            />
            <h3 className="movie-title">A Substância</h3>
          </div>
          <div className="movie-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="A Substância"
              className="movie-image"
            />
            <h3 className="movie-title">A Substância</h3>
          </div>
          <div className="movie-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="A Substância"
              className="movie-image"
            />
            <h3 className="movie-title">A Substância</h3>
          </div>
        </div>
      </section>

      <section id="remakes" className="remakes-section">
        <h2 className="section-title">Remakes de histórias marcantes!</h2>
        <div className="movie-grid">
          <div className="movie-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="Título do Filme"
              className="movie-image"
            />
            <h3 className="movie-title">Título do Filme</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;
