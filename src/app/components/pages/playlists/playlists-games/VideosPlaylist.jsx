import React from "react";
import { useParams } from "react-router-dom";
import { getPlaylistDetails } from "../service/videoplaylist.service";
import "../playlists-games/VideosPlaylist.css";

const VideosPlaylist = () => {
  const { id } = useParams();

  const playlist = getPlaylistDetails(id);

  if (!playlist) {
    return <p>Playlist not found!</p>;
  }

  return (
    <div className="videos-playlist-container">
      <div className="playlist-cover">
        <img
          src={playlist.coverImage}
          alt={playlist.title}
          className="cover-image"
        />
        <h3>{playlist.title}</h3>
        <p>{playlist.channelName}</p>
        <p>
          {playlist.videoCount} vídeos • {playlist.views} visualizações
        </p>
        <p>Última atualização em {playlist.lastUpdated}</p>
        <div className="playlist-actions">
          <button className="play-all-btn">Reproduzir tudo</button>
          <button className="shuffle-btn">Ordem aleatória</button>
        </div>
      </div>

      <div className="video-list">
        {playlist.videos.map((video, index) => (
          <div key={video.id} className="video-item">
            <div className="video-index">{index + 1}</div>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="video-thumbnail"
            />
            <div className="video-info">
              <h4>{video.title}</h4>
              <p>
                {video.views} visualizações • {video.uploaded}
              </p>
              <p className="video-duration">{video.duration}</p>
            </div>
            <button className="more-options-btn">⋮</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPlaylist;
