const API_URL = `${process.env.REACT_APP_API_URL}/api/playlists/playlists`;

export const fetchPlaylists = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro ao buscar playlists');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};

export const fetchPlaylistByGameId = async (gameId) => {
  try {
    const response = await fetch(`${API_URL}/${gameId}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar a playlist');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};
