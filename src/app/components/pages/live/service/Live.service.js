const API_URL_GAMES = 'http://localhost:3000/api/live/games';

export const fetchGames = async () => {
  try {
    const response = await fetch(API_URL_GAMES);
    if (!response.ok) {
      throw new Error('Erro ao buscar jogos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};
