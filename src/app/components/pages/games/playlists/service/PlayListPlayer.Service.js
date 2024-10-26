const PlayListPlayerService = {
  getPlaylistById: (id) => {
    const playlists = [
      {
        id: 1,
        title: "Assassin's Creed Valhalla",
        videos: [
          {
            videoId: "video1_id",
            title: "Video 1",
            description: "Descrição do video 1",
          },
          {
            videoId: "video2_id",
            title: "Video 2",
            description: "Descrição do video 2",
          },
        ],
      },
      {
        id: 2,
        title: "Assassin's Creed III Remastered",
        videos: [
          {
            videoId: "eULaVtrz6ek",
            title: "Assassin's Creed III Remastered Parte 1",
            description: "Descrição do video 1",
          },
          {
            videoId: "eULaVtrz6ek",
            title: "Assassin's Creed III Remastered Parte 1",
            description: "Descrição do video 1",
          },
          {
            videoId: "eULaVtrz6ek",
            title: "Assassin's Creed III Remastered Parte 1",
            description: "Descrição do video 1",
          },
          {
            videoId: "eULaVtrz6ek",
            title: "Assassin's Creed III Remastered Parte 1",
            description: "Descrição do video 1",
          },
          {
            videoId: "eULaVtrz6ek",
            title: "Assassin's Creed III Remastered Parte 1",
            description: "Descrição do video 1",
          },
          {
            videoId: "eULaVtrz6ek",
            title: "Assassin's Creed III Remastered Parte 1",
            description: "Descrição do video 1",
          },
          {
            videoId: "eULaVtrz6ek",
            title: "Assassin's Creed III Remastered Parte 1",
            description: "Descrição do video 1",
          },
        ],
      },
      {
        id: 2,
        title: "Assassin's Creed II",
        videos: [
          {
            videoId: "eULaVtrz6ek",
            title: "Assassin's Creed III Remastered Parte 1",
            description: "Descrição do video 1",
          },
          {
            videoId: "eULaVtrz6ek",
            title: "Assassin's Creed III Remastered Parte 1",
            description: "Descrição do video 1",
          },
          {
            videoId: "eULaVtrz6ek",
            title: "Assassin's Creed III Remastered Parte 1",
            description: "Descrição do video 1",
          },
          {
            videoId: "eULaVtrz6ek",
            title: "Assassin's Creed III Remastered Parte 1",
            description: "Descrição do video 1",
          },
          {
            videoId: "eULaVtrz6ek",
            title: "Assassin's Creed III Remastered Parte 1",
            description: "Descrição do video 1",
          },
          {
            videoId: "eULaVtrz6ek",
            title: "Assassin's Creed III Remastered Parte 1",
            description: "Descrição do video 1",
          },
          {
            videoId: "eULaVtrz6ek",
            title: "Assassin's Creed III Remastered Parte 1",
            description: "Descrição do video 1",
          },
        ],
      },
    ];

    return playlists.find((playlist) => playlist.id === parseInt(id));
  },
};

export default PlayListPlayerService;
