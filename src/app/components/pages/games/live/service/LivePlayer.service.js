// Função para retornar playlists com base no gameId
export const getPlaylistByGameId = (gameId) => {
  const playlists = {
    WatchDogs: [
      {
        videoId: "E8tjZoSwD0c",
        title: "WATCHDOGS - Parte 1",
      },
    ],
  };

  // Retorna a playlist correspondente ao gameId ou um array vazio se não encontrar
  return playlists[gameId] || [];
};
