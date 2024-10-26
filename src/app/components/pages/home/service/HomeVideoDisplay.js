import React from "react";

const HomeVideoDisplay = ({ videos, openModal }) => {
  return (
    <div className="video-display">
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
    </div>
  );
};

export default HomeVideoDisplay;
