import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchVideos } from './api/Videoslist.Service';
import '../../games/videos/css/VideosList.css';

const VideosComponent = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      const data = await fetchVideos();
      setVideos(data);
      setLoading(false);
    };

    loadVideos();
  }, []);

  const renderSkeletonLoader = () => {
    return (
      <div className="video-grid">
        {[...Array(9)].map((_, index) => (
          <div className="video-item skeleton" key={index}>
            <div className="skeleton-thumbnail-video"></div>
            <div className="skeleton-title-video"></div>
          </div>
        ))}
      </div>
    );
  };

  const renderVideos = () => {
    return (
      <div className="video-grid">
        {videos.map((video) => (
          <div className="video-item" key={video.videoId}>
            <Link to={`/videos/${video.videoId}`}>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
            </Link>
            <h3>{video.snippet.title}</h3>
          </div>
        ))}
      </div>
    );
  };

  return <div>{loading ? renderSkeletonLoader() : renderVideos()}</div>;
};

export default VideosComponent;
