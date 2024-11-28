import React from "react";
import "../about/About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>Sobre o NettStudios</h1>
        <p>
          Bem-vindo ao <strong>NettStudios</strong>, um projeto inovador voltado
          para a criação de conteúdo no universo dos <strong>games</strong>. A
          missão é oferecer uma plataforma onde os fãs de jogos, criadores de
          conteúdo e entusiastas do entretenimento digital possam se "conectar",
          explorar e se divertir. Criamos vídeos, gameplays e outros conteúdos
          originais com o objetivo de proporcionar uma experiência única,
          divertida e envolvente para todos.
        </p>
        <p>
          O <strong>NettStudios</strong> nasceu da paixão por games e pela
          vontade de compartilhar nossa jornada com um público que, assim como
          nós, adora explorar mundos virtuais e se divertir com os desafios do
          universo dos jogos. Desde o nosso início em 2015 no{" "}
          <strong>YouTube</strong> o objetivo sempre foi criar conteúdo
          relevante, interativo e de qualidade, seja você um gamer ou alguém em
          busca de entretenimento. E, embora tenhamos evoluído ao longo dos
          anos, nossa essência continua sendo a mesma: trazer diversão e
          experiências únicas no mundo dos games.
        </p>
      </section>

      <section className="about-content">
        <h2>Nossa Missão</h2>
        <p>
          Acreditamos que o entretenimento deve ser acessível, diversificado e
          sempre inovador. <strong>NettStudios</strong> é o seu lugar para
          encontrar gameplays emocionantes, dicas, análises e tudo o que envolve
          o fascinante mundo dos jogos. Trabalhamos para que cada vídeo seja uma
          experiência única, com a melhor qualidade possível, e sempre em
          sintonia com os mais novos lançamentos do mercado de games.
        </p>
        <h2>Parcerias e Unidades</h2>
        <p>
          O <strong>NettStudios</strong> faz parte do{" "}
          <strong>NettCorpSolutions</strong>, um conglomerado que reúne outras
          unidades inovadoras e com foco em diferentes áreas. Junto a nós,
          também temos o <strong>NettCode</strong>, uma divisão especializada em{" "}
          <strong>TI, Consultoria e Desenvolvimento de Software</strong>.
          Juntas, essas "empresas" formam um ecossistema completo que busca não
          só entreter, mas também inovar e oferecer soluções tecnológicas para
          quem precisa.
        </p>
        <h2>Assinaturas e Acesso Exclusivo</h2>
        <p>
          Em breve, vamos oferecer opções de assinaturas para que você possa ter
          acesso a conteúdos ainda mais exclusivos! Vale ressaltar que, por
          enquanto, não haverá cobrança para acessar os nossos vídeos. Quando as
          assinaturas forem ativadas, a proposta será simbólica e voltada para
          oferecer algo realmente exclusivo para quem deseja apoiar nosso
          trabalho, com benefícios como conteúdos extras, bastidores, acesso
          antecipado a novos vídeos e muito mais.
        </p>
      </section>
    </div>
  );
};

export default About;
