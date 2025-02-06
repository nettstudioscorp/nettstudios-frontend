import React from 'react';
import { Link } from 'react-router-dom';
import './privacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <br />
      <br />
      <br />

      <h1>Política de Privacidade</h1>

      <Link to="/" className="back-arrow right-arrow">
        ←
      </Link>

      <p>
        Bem-vindo à nossa Política de Privacidade. Sua privacidade é muito
        importante para nós, e estamos comprometidos em protegê-la.
      </p>

      <br />

      <h2>1. Proteção de Dados</h2>
      <p>
        Estamos comprometidos com a proteção de seus dados pessoais, incluindo
        quaisquer informações que você possa compartilhar conosco por meio do
        site NettStudios. As informações coletadas são usadas exclusivamente
        para melhorar sua experiência, enviar notícias de games e personalizar
        nossos serviços.
      </p>

      <br />

      <h2>2. Coleta de Informações</h2>
      <p>
        Ao utilizar o NettStudios, você pode ser solicitado a fornecer
        informações pessoais como:
      </p>
      <ul>
        <li>Nome</li>
        <li>E-mail</li>
        <li>Informações de contato</li>
        <li>Preferências de jogos</li>
      </ul>
      <p>
        Essas informações são usadas para fins administrativos, envio de
        notícias de games e personalização da sua experiência.
      </p>

      <br />

      <h2>3. Compartilhamento de Informações</h2>
      <p>
        Garantimos que seus dados pessoais não serão compartilhados com
        terceiros sem o seu consentimento, exceto quando exigido por lei.
      </p>

      <br />

      <h2>4. Segurança</h2>
      <p>
        Implementamos medidas de segurança para proteger suas informações
        pessoais contra acesso não autorizado, uso indevido ou divulgação.
      </p>

      <br />

      <h2>5. Alterações na Política</h2>
      <p>
        Reservamo-nos o direito de atualizar esta política de privacidade a
        qualquer momento. Qualquer alteração será publicada nesta página com a
        devida antecedência.
      </p>

      {/* <h2>6. Contato</h2>
      <p>
        Se você tiver dúvidas ou preocupações sobre nossa Política de
        Privacidade, entre em contato conosco pelo e-mail:{' '}
        <strong>contato@nettstudios.com</strong>.
      </p> */}
      <br />
      <br />
      <br />
    </div>
  );
};

export default PrivacyPolicy;
