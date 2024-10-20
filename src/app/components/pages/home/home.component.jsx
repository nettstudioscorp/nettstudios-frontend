import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./home.component.css";

const HomeComponent = () => {
  const [movies, setMovies] = useState([]);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    const movieData = [
      {
        title: "Alien: Romulus",
        image:
          "https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg",
        // status: "NOVO",
      },
      {
        title: "A Substância",
        image:
          "https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg",
        // status: "NOVO",
      },
      {
        title: "Batman: Arkham Knight",
        image:
          "https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg",
        // status: "NOVO",
      },
      {
        title: "Batman: Arkham Knight",
        image:
          "https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg",
        // status: "NOVO",
      },
      {
        title: "Batman: Arkham Knight",
        image:
          "https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg",
        // status: "NOVO",
      },
      {
        title: "Batman: Arkham Knight",
        image:
          "https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg",
        status: "NOVO",
      },
      {
        title: "Batman: Arkham Knight",
        image:
          "https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg",
        status: "NOVO",
      },
    ];
    setMovies(movieData);
  }, []);

  const movieTemplate = (movie) => {
    return (
      <div className="movie-card border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-6 shadow-2 movie-image"
          />
        </div>
        <div>
          <h4 className="mb-1">{movie.title}</h4>
          <Tag value={movie.status} className="mt-2"></Tag>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" className="p-button p-button-rounded" />
            <Button
              icon="pi pi-star-fill"
              className="p-button-success p-button-rounded"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="home-container">
      <h2 className="section-title">Filmes Populares</h2>
      <Carousel
        value={movies}
        numScroll={1}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={movieTemplate}
        className="custom-carousel"
      />
    </div>
  );
};

export default HomeComponent;
