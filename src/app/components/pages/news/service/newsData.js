const API_URL_NEWS = `${process.env.REACT_APP_API_URL}/api/news`;

export const fetchNews = async () => {
  try {
    const response = await fetch(API_URL_NEWS);
    if (!response.ok) {
      throw new Error('Erro ao buscar notícias');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};
