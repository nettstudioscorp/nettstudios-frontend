const API_URL_PLAYLISTS_EM_LANCAMENTO = `${process.env.REACT_APP_API_URL}/api/home/playlists-em-lancamento`;
const API_URL_PLAYLISTS_DESTAQUES = `${process.env.REACT_APP_API_URL}/api/home/playlists-destaques`;

export const fetchPlaylistsEmLançamento = async () => {
  try {
    const response = await fetch(API_URL_PLAYLISTS_EM_LANCAMENTO);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch playlists em lançamento:', error);
    return [];
  }
};

export const fetchPlaylistsDestaques = async () => {
  try {
    const response = await fetch(API_URL_PLAYLISTS_DESTAQUES);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch playlists destaques:', error);
    return [];
  }
};
