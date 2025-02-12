export const fetchPlaylistsEmLançamento = async () => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/home/playlists-em-lancamento'
    );
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
    const response = await fetch(
      'http://localhost:3000/api/home/playlists-destaques'
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch playlists destaques:', error);
    return [];
  }
};
