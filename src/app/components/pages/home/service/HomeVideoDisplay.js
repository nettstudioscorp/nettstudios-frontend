import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeVideoDisplay = ({ videos, openModal }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <div className="slick-prev" />,
    nextArrow: <div className="slick-next" />,
  };

  return (
    <Slider {...settings}>
      {videos.map((video) => (
        <div
          key={video.videoId}
          className="video-thumbnail"
          onClick={() => openModal(video)}
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="thumbnail-image"
          />
          <p>{video.title}</p>
        </div>
      ))}
    </Slider>
  );
};

export default HomeVideoDisplay;
