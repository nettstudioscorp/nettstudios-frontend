import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ActionCategoriesList.css';

const mockPlaylists = {
  'Far Cry ': [
    {
      id: 'Far Cry Classic',
      name: 'Far Cry Classic',
      thumbnail:
        'https://www.zastavki.com/pictures/1280x720/2008/Games_far_cry_007167_26.jpg',
    },
  ],

  "Assassin's Creed": [
    {
      id: "Assassin's Creed III Remastered",
      name: "Assassin's Creed III Remastered",
      thumbnail:
        'https://i.ytimg.com/vi/x0tguNWiuu4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDCfhJgmVp6ApBFGKZ2B6s1dU7Kxg',
    },
    {
      id: "Assassin's Creed Valhalla",
      name: "Assassin's Creed Valhalla",
      thumbnail:
        'https://wallpapers.com/images/hd/assassin-s-creed-valhalla-varin-s-axe-k7diwwziiqd0t1uq.jpg',
    },
    {
      id: "Assassin's Creed Rogue",
      name: "Assassin's Creed Rogue",
      thumbnail:
        'https://c4.wallpaperflare.com/wallpaper/138/449/106/assassins-creed-rogue-wallpaper-preview.jpg',
    },
  ],
  'Ação/Terror': [
    {
      id: 'AlanWake',
      name: 'Alan Wake',
      thumbnail:
        'https://www.finalfaqs.com.br/wp-content/uploads/2020/12/Alan-Wake.jpg.webp',
    },
  ],
};

const ActionCategoriesList = () => {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState({});

  useEffect(() => {
    setPlaylists(mockPlaylists);
  }, []);

  return (
    <div className="categories-list-container">
      {Object.entries(playlists).map(([category, games]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="playlists-grid">
            {games.map((game) => (
              <div
                key={game.id}
                className="playlist-card"
                onClick={() => navigate(`/playlist/${game.id}`)}
              >
                <div className="thumbnail-wrapper">
                  <img src={game.thumbnail} alt={game.name} />
                </div>
                <div className="playlist-info">
                  <h3>{game.name}</h3>
                  <p>Ver playlist completa</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActionCategoriesList;
