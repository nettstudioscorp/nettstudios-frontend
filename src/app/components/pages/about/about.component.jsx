import React from "react";
import "../about/about.component.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>Sobre Nós</h1>
        <p>
          TheNettko começou sua jornada em 2015 como um projeto focado
          exclusivamente em gameplays no youtube. Desde o início, nosso objetivo
          foi que pudessem encontrar conteúdo envolvente e divertido, explorando
          novos mundos virtuais e compartilhando experiências dentro dos jogos.
          Com o passar dos anos, vimos a oportunidade de expandir nosso escopo
          para além dos gameplays. Hoje, estamos desenvolvendo o site TheNettko,
          um portal que não apenas continua oferecendo conteúdo de jogos, mas
          também se tornou um hub de informações sobre programação, tecnologia e
          outras áreas relacionadas ao mundo digital. Nosso novo foco inclui:
          Gameplays: Mantendo a essência do projeto original, continuamos
          trazendo vídeos, tutoriais e streams sobre os jogos mais populares e
          os lançamentos mais esperados. Programação: Entendemos a importância
          da tecnologia no mundo moderno, por isso expandimos nosso conteúdo
          para oferecer artigos, tutoriais e dicas para desenvolvedores e
          entusiastas de programação. Podcasts: Estamos criando uma série de
          podcasts, onde discutimos tendências, novidades e insights do mundo
          dos games e da tecnologia, com convidados especiais e especialistas da
          área. Notícias (News): Fique por dentro das últimas atualizações,
          lançamentos e eventos importantes, não apenas no universo dos jogos,
          mas também em tecnologia e programação.
        </p>
      </section>

      <section className="about-content">
        <h2>Nossa Missão</h2>
        <p>
          No TheNettko, acreditamos que o mundo digital é vasto e cheio de
          possibilidades, e nossa missão é ser o seu ponto de referência para
          aprender, explorar e se divertir com conteúdo de alta qualidade. Nossa
          equipe está sempre trabalhando para trazer novidades, com a mesma
          paixão e dedicação que temos desde o início. Venha fazer parte da
          nossa jornada enquanto continuamos a crescer e explorar novos
          horizontes!
        </p>
      </section>
      {/* TODO:
      <section className="about-team">
        <h2>Nosso Time/h2>
        <div className="team-members">
          <div className="member">
            <img src="path-to-image" alt="Team member 1" />
            <h3>John Doe</h3>
            <p>Lead Developer</p>
          </div>
          <div className="member">
            <img src="path-to-image" alt="Team member 2" />
            <h3>Jane Smith</h3>
            <p>Project Manager</p>
          </div>
          
        </div>
      </section> */}
    </div>
  );
};

export default About;
