export const getPlaylistByGameId = (gameId) => {
  const playlists = {
    R6: [
      {
        videoId: "VIDEO_ID_BATMAN1",
        title: "Batman - Parte 1",
        thumbnail: "/thumbnails/batman1.jpg",
      },
      {
        videoId: "VIDEO_ID_BATMAN2",
        title: "Batman - Parte 2",
        thumbnail: "/thumbnails/batman2.jpg",
      },
    ],
    WatchDogs: [
      {
        videoId: "E8tjZoSwD0c",
        title: "Spiderman - Parte 1",
      },
    ],
  };
  return playlists[gameId] || [];
};
