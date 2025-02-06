export const videos = [
  {
    id: '1',
    videoId: './videos/video1.mp4',
    snippet: {
      title: "Assassin's Creed Valhalla Parte 60",
      thumbnails: {
        medium: {
          url: 'https://wallpapers.com/images/high/4k-assassin-s-creed-valhalla-background-3840-x-2160-inzoy2k4g3k6c4bf.webp',
        },
      },
      description: '6 de jul. de 2024',
    },
  },
  {
    id: '2',
    videoId: 'rNEra09Lkyc',
    snippet: {
      title: "Assassin's Creed Valhalla Parte 5",
      thumbnails: {
        medium: {
          url: 'https://wallpapers.com/images/high/4k-assassin-s-creed-valhalla-background-3840-x-2160-inzoy2k4g3k6c4bf.webp',
        },
      },
      description: '23 de jun. de 2024',
    },
  },
  {
    id: '3',
    videoId: 'UI4s7S7OFtA',
    snippet: {
      title: 'Far Cry Primal Parte 19 ',
      thumbnails: {
        medium: {
          url: 'https://wallpapercave.com/wp/wp1896894.jpg',
        },
      },
      description: '17 de jun. de 2024',
    },
  },
  {
    id: '4',
    videoId: '5_seyG6_wmI',
    snippet: {
      title: "Assassin's Creed Rogue Parte 21 ",
      thumbnails: {
        medium: {
          url: 'https://wallpapercave.com/wp/wp2212972.jpg',
        },
      },
      description: '10 de jun. de 2024',
    },
  },
  {
    id: '5',
    videoId: 'Hk0Mpe-9kYw',
    snippet: {
      title: "Assassin's Creed Rogue Parte 20",
      thumbnails: {
        medium: {
          url: 'https://wallpapercave.com/wp/wp2212972.jpg',
        },
      },
      description: '27 de mai. de 2024',
    },
  },
];

class VideosService {
  getVideos() {
    return videos;
  }

  addVideo(video) {
    videos.push(video);
  }

  deleteVideoById(videoId) {
    const index = videos.findIndex((video) => video.videoId === videoId);
    if (index !== -1) {
      videos.splice(index, 1);
    }
  }

  updateVideo(id, updatedVideo) {
    const index = videos.findIndex((video) => video.id === id);
    if (index !== -1) {
      videos[index] = {
        ...videos[index],
        ...updatedVideo,
        snippet: {
          ...videos[index].snippet,
          ...updatedVideo.snippet,
        },
      };
    }
  }
}

export const videosService = new VideosService();
