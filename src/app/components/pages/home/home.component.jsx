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

      <section id="games" className="games-section">
        <h2 className="section-title">
          Jogos em andamento e suas curiosidades!
        </h2>
        <div className="game-grid">
          <div className="game-card">
            <img
              src="https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg"
              alt="Assassin's Creed Valhalla"
              className="game-image"
            />
            <h3 className="game-title">Assassin's Creed Valhalla</h3>
            <p className="game-description">
              Sinopse: O movimento do Grande Exército Pagão na Inglaterra
              durante as expansões Vikings...
            </p>
          </div>
          <div className="game-card">
            <img
              src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4RKia895j9bcLcVEsLL1PB/dbd31dfe5049a8b65abbe13727d113ef/ac-rogue-heroBanner.jpg"
              alt="Assassin's Creed Rogue"
              className="game-image"
            />
            <h3 className="game-title">Assassin's Creed Rogue</h3>
            <p className="game-description">
              Também é o único Assassin's Creed a estrelar um Templário, pois o
              ex-Assassino Shay Cormac...
            </p>
          </div>
          <div className="game-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="Batman: Arkham Knight"
              className="game-image"
            />
            <h3 className="game-title">Batman: Arkham Knight</h3>
            <p className="game-description">
              Escrita por Sefton Hill, a história acontece um ano após os
              eventos de Arkham City...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;
