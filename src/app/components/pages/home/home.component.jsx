import React from "react";

import "../home/home.component.css";

const HomeComponent = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-text">
          {/* <h1 className="hero-title">Welcome to theNettko WebSite!</h1> */}
          {/* TODO: <p className="hero-subtitle">Vídeos Exclusivos para Membros!</p>
          <a href="#games" className="cta-button">
            Assine Já
          </a> */}
        </div>
      </header>

      <section id="games" className="games-section">
        <h2 className="section-title">
          Jogos em andamento e suas curiosidades!
        </h2>
        <div className="game-grid">
          <div className="game-card">
            <img
              src="https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg"
              alt="Game 2"
              className="game-image"
            />
            <h3 className="game-title">Assassin's Creed Valhalla</h3>
            <p className="game-description">
              Sinopse. O movimento do Grande Exército Pagão na Inglaterra
              durante as expansoes Vikings. O mapa mostra alguns dos reinos que
              o jogador pode explorar em Valhalla. Em Assassin's Creed Valhalla,
              a história acontece perto do final do século IX, em 873, durante
              as Invasões Vikings da Grã Bretanha.
            </p>
          </div>
          <div className="game-card">
            <img
              src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4RKia895j9bcLcVEsLL1PB/dbd31dfe5049a8b65abbe13727d113ef/ac-rogue-heroBanner.jpg"
              alt="Game 2"
              className="game-image"
            />
            <h3 className="game-title">Assassin's Creed Rogue</h3>
            <p className="game-description">
              Também é o único Assassin's Creed a estrelar um Templário, pois o
              ex-Assassino Shay Cormac troca de lado e vivencia a outra ponta
              das táticas de Assassinos em um jogo contínuo de gato e rato.
              Lançado no mesmo ano que Rogue, Unity se passa durante a Revolução
              Francesa em um modelo de Paris em escala 1:1.
            </p>
          </div>
          <div className="game-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="Game 3"
              className="game-image"
            />
            <h3 className="game-title">Batman: Arkham Knight</h3>
            <p className="game-description">
              Escrita por Sefton Hill, Martin Lancaster e Ian Ball, a história
              acontece um ano depois dos eventos de Arkham City, em que Batman,
              no pico máximo das suas habilidades, tem de defrontar o
              super-vilão Espantalho, que criou um ataque a Gotham City causando
              a evacuação da cidade.
            </p>
          </div>
        </div>
      </section>

      <section id="games" className="games-section">
        {/* TODO: <h2 className="section-title">
          Jogos em andamento e suas curiosidades!
        </h2> */}
        <div className="game-grid">
          <div className="game-card">
            <img
              src="https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg"
              alt="Game 2"
              className="game-image"
            />
            <h3 className="game-title">Assassin's Creed Valhalla</h3>
            <p className="game-description">
              Sinopse. O movimento do Grande Exército Pagão na Inglaterra
              durante as expansoes Vikings. O mapa mostra alguns dos reinos que
              o jogador pode explorar em Valhalla. Em Assassin's Creed Valhalla,
              a história acontece perto do final do século IX, em 873, durante
              as Invasões Vikings da Grã Bretanha.
            </p>
          </div>
          <div className="game-card">
            <img
              src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4RKia895j9bcLcVEsLL1PB/dbd31dfe5049a8b65abbe13727d113ef/ac-rogue-heroBanner.jpg"
              alt="Game 2"
              className="game-image"
            />
            <h3 className="game-title">Assassin's Creed Rogue</h3>
            <p className="game-description">
              Também é o único Assassin's Creed a estrelar um Templário, pois o
              ex-Assassino Shay Cormac troca de lado e vivencia a outra ponta
              das táticas de Assassinos em um jogo contínuo de gato e rato.
              Lançado no mesmo ano que Rogue, Unity se passa durante a Revolução
              Francesa em um modelo de Paris em escala 1:1.
            </p>
          </div>
          <div className="game-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="Game 3"
              className="game-image"
            />
            <h3 className="game-title">Batman: Arkham Knight</h3>
            <p className="game-description">
              Escrita por Sefton Hill, Martin Lancaster e Ian Ball, a história
              acontece um ano depois dos eventos de Arkham City, em que Batman,
              no pico máximo das suas habilidades, tem de defrontar o
              super-vilão Espantalho, que criou um ataque a Gotham City causando
              a evacuação da cidade.
            </p>
          </div>
        </div>
      </section>

      {/* TODO:       
      <section id="news" className="news-section">
        <h2 className="section-title">Novidades sobre Games e Programação</h2>
        <div className="news-grid">
          <article className="news-card">
            <h3 className="news-title">Lançamento de Novos Jogos</h3>
            <p className="news-description">
              Confira os últimos lançamentos de jogos que estão movimentando a
              comunidade gamer!
            </p>
          </article>
          <article className="news-card">
            <h3 className="news-title">Tendências em Programação</h3>
            <p className="news-description">
              Descubra as mais recentes novidades no mundo da programação e como
              elas estão impactando o desenvolvimento de software.
            </p>
          </article>
        </div>
      </section> */}

      {/* TODO: <section id="podcasts" className="podcast-section">
        <h2 className="section-title">Podcasts de Games e Programação</h2>
        <div className="podcast-grid">
          <article className="podcast-card">
            <h3 className="podcast-title">Podcast 1: GameDev Talks</h3>
            <p className="podcast-description">
              Discussões sobre o desenvolvimento de games com profissionais da
              indústria.
            </p>
          </article>
          <article className="podcast-card">
            <h3 className="podcast-title">Podcast 2: CodeCast</h3>
            <p className="podcast-description">
              As últimas tendências e dicas para desenvolvedores de software.
            </p>
          </article>
        </div>
      </section> */}
    </div>
  );
};

export default HomeComponent;
