// Função para retornar playlists com base no gameId
export const getPlaylistByGameId = (gameId) => {
  const playlists = {
    // Lista de vídeos para o jogo WatchDogs
    WatchDogs: [
      {
        videoId: "E8tjZoSwD0c",
        title: "Spiderman - Parte 1",
      },
      {
        videoId: "E8tjZoSwD0c",
        title: "Spiderman - Parte 2",
      },
    ],
    // Lista de vídeos para o jogo WatchDogs 2
    "WatchDogs 2": [
      {
        videoId: "X4GgZoSwD0c",
        title: "WatchDogs 2 - Parte 1",
      },
      {
        videoId: "X4GgZoSwD0c",
        title: "WatchDogs 2 - Parte 2",
      },
      {
        videoId: "X4GgZoSwD0c",
        title: "WatchDogs 2 - Parte 3",
      },
    ],
    // Adicionar Games
  };

  // Retorna a playlist correspondente ao gameId ou um array vazio se não encontrar
  return playlists[gameId] || [];
};
