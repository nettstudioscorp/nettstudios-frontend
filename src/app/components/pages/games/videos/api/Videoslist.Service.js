export const fetchVideos = async () => {
  try {
    const response = await fetch('http://localhost:3000/videos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar vídeos: ' + response.statusText);
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Erro ao buscar vídeos:', error);
    return [];
  }
};
