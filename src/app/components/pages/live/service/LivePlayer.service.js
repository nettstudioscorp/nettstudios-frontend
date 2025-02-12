const API_URL_PLAYLISTS = `${process.env.REACT_APP_API_URL}/api/live/playlists`;

export const fetchPlaylistByGameId = async (gameId) => {
  try {
    const response = await fetch(`${API_URL_PLAYLISTS}/${gameId}`);
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
