import React from 'react';
import { Link } from 'react-router-dom';
import PlayListService from './service/PlayList.Service';
import './Playlist.css'

const Playlist = () => {
    const playlists = PlayListService.getPlaylists();

    return (
        <div className="playlist-container">
            {playlists.map((playlist, index) => (
                <div key={index} className="playlist-card">
                    <Link to={`/playlist/${playlist.id}`}>
                        <img src={playlist.thumbnail} alt={playlist.title} />
                        <div className="playlist-info">
                            <h3>{playlist.title}</h3>
                            <p>{playlist.videos.length} vídeos</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Playlist;
