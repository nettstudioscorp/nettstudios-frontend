export const fetchVideos = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/home/videos');
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
