import React from "react";
import { useParams, Link } from "react-router-dom";
import { videos } from "../videos-games/service/youtubeService";
import "../../videos/videos-games/videoplayer.component.css";

const VideoPlayerComponent = () => {
  const { videoId } = useParams();
  const video = videos.find((v) => v.videoId === videoId);

  if (!video) {
    return <div>Vídeo não encontrado</div>;
  }

  const { title, description } = video.snippet;

  return (
    <div className="video-page-container">
      <div className="video-sidebar">
        {videos.map((v, index) => (
          <div
            key={v.videoId}
            className={`sidebar-item ${v.videoId === videoId ? "active" : ""}`}
          >
            <Link to={`/videos/${v.videoId}`}>
              {index + 1}. {v.snippet.title}
            </Link>
          </div>
        ))}
      </div>

      <div className="video-player-container">
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
        {/* <div className="video-details">
          <h3>{title}</h3>
          <p>{description}</p>
        </div> */}
      </div>
    </div>
  );
};

export default VideoPlayerComponent;
