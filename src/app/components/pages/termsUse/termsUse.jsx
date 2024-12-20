import React from 'react';
import '../termsUse/termsUse.css';
import { Link } from 'react-router-dom';

const TermsUse = () => {
  return (
    <div className="terms-container">
      <br />
      <br />
      <br />

      <h1>Termos de Uso do Site NettStudios</h1>

      <Link to="/" className="back-arrow right-arrow">
        ←
      </Link>

      <p>
        Bem-vindo ao <strong>NettStudios</strong>! Estes Termos de Uso
        ("Termos") regulam o uso do site <strong>NettStudios</strong>, incluindo
        todas as funcionalidades, conteúdos e serviços oferecidos, como vídeos
        autorais de gameplays e notícias relacionadas ao universo dos games.
      </p>
      <p>
        Ao acessar e utilizar o <strong>NettStudios</strong>, você concorda com
        estes Termos. Leia-os atentamente antes de continuar navegando. Caso não
        concorde com qualquer parte destes Termos, recomendamos que não utilize
        o site.
      </p>

      <br />

      <h2>1. Aceitação dos Termos de Uso</h2>
      <ul>
        <li>
          1.1. Ao acessar o site <strong>NettStudios</strong>, você declara que
          leu, entendeu e concorda em cumprir com estes Termos.
        </li>
        <li>
          1.2. Este site não é destinado a menores de 13 anos. Usuários entre 13
          e 17 anos devem obter consentimento de seus responsáveis legais antes
          de utilizar o site.
        </li>
      </ul>

      <br />

      <h2>2. Direitos Autorais e Propriedade Intelectual</h2>
      <ul>
        <li>
          2.1. Todos os vídeos disponíveis no site são gravações autorais de
          gameplays realizadas pelo <strong>NettStudios</strong>. A reprodução,
          distribuição ou modificação de qualquer conteúdo sem prévia
          autorização escrita é estritamente proibida.
        </li>
        <li>
          2.2. As notícias e artigos publicados no site são de propriedade do{' '}
          <strong>NettStudios</strong> ou de terceiros devidamente autorizados,
          protegidos pelas leis de direitos autorais aplicáveis.
        </li>
        <li>
          2.3. Caso deseje utilizar algum conteúdo do{' '}
          <strong>NettStudios</strong>, entre em contato pelo e-mail
          disponibilizado na seção "Contato" do site.
        </li>
      </ul>

      <br />

      <h2>3. Uso do Conteúdo e Funcionalidades</h2>
      <ul>
        <li>
          3.1. É permitido acessar os vídeos e notícias do site para uso pessoal
          e não comercial.
        </li>
        <li>
          3.2. É proibido:
          <ul>
            <li>Fazer download de vídeos ou materiais sem autorização.</li>
            <li>
              Modificar, copiar, distribuir ou reproduzir o conteúdo do site
              para fins comerciais.
            </li>
            <li>
              Utilizar o site para fins ilegais ou que violem direitos de
              terceiros.
            </li>
          </ul>
        </li>
        <li>
          3.3. Você concorda em não tentar acessar áreas restritas do site ou
          interferir no funcionamento dos serviços oferecidos.
        </li>
      </ul>

      <br />

      <h2>4. Notícias e Atualizações sobre Games</h2>
      <ul>
        <li>
          4.1. As notícias publicadas no site <strong>NettStudios</strong> são
          baseadas em fontes confiáveis. Entretanto, não garantimos a total
          precisão ou atualidade das informações fornecidas.
        </li>
        <li>
          4.2. O <strong>NettStudios</strong> reserva-se o direito de modificar
          ou remover qualquer notícia ou artigo sem aviso prévio.
        </li>
      </ul>

      <br />

      <h2>5. Responsabilidades do Usuário</h2>
      <ul>
        <li>
          5.1. Você é responsável por garantir que utiliza o site em
          conformidade com a legislação aplicável no seu país.
        </li>
        <li>
          5.2. O <strong>NettStudios</strong> não se responsabiliza por
          quaisquer danos causados pela má utilização do site ou de seus
          conteúdos.
        </li>
      </ul>

      <br />

      <h2>6. Modificações nos Termos</h2>
      <ul>
        <li>
          6.1. O <strong>NettStudios</strong> pode atualizar estes Termos a
          qualquer momento. As alterações serão publicadas nesta página, com a
          data da última atualização indicada no final do documento.
        </li>
        <li>
          6.2. Recomendamos que revise os Termos periodicamente para estar
          ciente de quaisquer mudanças.
        </li>
      </ul>

      {/* <h2>7. Contato</h2>
      <p>
        Em caso de dúvidas ou solicitações relacionadas a estes Termos de Uso,
        entre em contato conosco pelo e-mail:{' '}
        <strong>contato@nettstudios.com</strong>.
      </p> */}

      {/* <p>
        <em>Última atualização:</em> [data]
      </p> */}
      <br />
      <br />
      <br />
      {/* <Link to="/" className="back-arrow">
        →
      </Link> */}
    </div>
  );
};

export default TermsUse;
