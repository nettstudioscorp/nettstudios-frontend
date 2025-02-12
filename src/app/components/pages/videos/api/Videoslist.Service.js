const API_URL = `${process.env.REACT_APP_API_URL}/api/videos/videos`;

export const fetchVideos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro ao buscar vídeos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};
