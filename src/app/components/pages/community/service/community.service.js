const API_URL_COMMUNITY = 'http://localhost:3000/api/community';

export const fetchCommunityPosts = async () => {
  try {
    const response = await fetch(API_URL_COMMUNITY);
    if (!response.ok) {
      throw new Error('Erro ao buscar posts da comunidade');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};
