import React, { useState } from "react";

const VideoList = ({ title, videos, openModal }) => {
  const [visibleVideos, setVisibleVideos] = useState(12);

  const loadMoreVideos = () => {
    setVisibleVideos((prev) => prev + 12);
  };

  return (
    <section className="video-section">
      <h1 className="section-title-home">{title}</h1>
      <div className="video-grid">
        {videos.slice(0, visibleVideos).map((video) => (
          <div
            className="video-card"
            key={video.id}
            onClick={() => openModal(video.id, video.title)}
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="video-title">{video.title}</h3>
          </div>
        ))}
      </div>
      {visibleVideos < videos.length && (
        <button className="load-more" onClick={loadMoreVideos}>
          Ver mais
        </button>
      )}
    </section>
  );
};

export default VideoList;
