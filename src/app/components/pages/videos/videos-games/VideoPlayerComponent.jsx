import React from "react";
import { useParams } from "react-router-dom";
import { videos } from "../videos-games/service/youtubeService";
import "../../videos/videos-games/videoplayer.component.css";

const VideoPlayerComponent = () => {
  const { videoId } = useParams();
  const video = videos.find((v) => v.videoId === videoId);

  if (!video) {
    return <div>Video not found</div>;
  }

  const { title, description } = video.snippet;

  return (
    <div className="video-player-container">
      {/* TODO: <h2>Player Interno</h2> */}
      <div className="video-player-wrapper">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* TODO: <div className="video-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div> */}
    </div>
  );
};

export default VideoPlayerComponent;
