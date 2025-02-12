const API_URL = `${process.env.REACT_APP_API_URL}/api/home/videos`;

export const fetchVideos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch videos:', error);
    return [];
  }
};

// ============================= // =======================

const sections = [
  {
    // title: '',
    items: [],
  },

  {
    // title: '',
    items: [],
  },

  {
    // title: '',
    items: [],
  },
];

export default sections;
