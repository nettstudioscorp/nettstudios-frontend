import React from 'react';
import logo from '../../../../src/app/components/footer/img/NettStudios.svg';
import '../footer/Footer.css';
// import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />

          <p className="footer-description">
            NettStudios, focada no universo dos Games e do entretenimento
            digital. Desde 2015, o NettStudios produz e compartilha conteúdos de
            gameplays, análises, e dicas voltadas para gamers e entusiastas do
            setor. Com um compromisso de inspirar e engajar sua audiência, o
            NettStudios se destaca como um espaço criativo para apaixonados por
            jogos.
          </p>
          <p className="footer-email">
            Email:{' '}
            <a href="mailto: contatonettplay@gmail.com">nettstudios@mail.com</a>
            <br />
            <br />
            <a href="/about">Sobre Nós</a>
          </p>
        </div>

        <div className="footer-right">
          {/* TODO: <div className="footer-links">
            <h4>Outros Links</h4>
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div className="footer-app">
            <Link to="/about" className="footer-app-button">
              Sobre Nós
            </Link>
          </div> */}
        </div>
      </div>
      <br />
      <div className="footer-bottom">
        <p>
          © Copyright 2015-2025 NettStudios - Games, Entretenimento e Criação
          de Conteúdo.
        </p>
        <a href="/termos-de-uso">Termos de uso</a> &nbsp;
        <span style={{ color: 'white' }}>e</span> &nbsp;
        <a href="/politica-de-privacidade">Política de privacidade</a>
        <br />
        <p>
          Desenvolvido por{' '}
          <a href="https://alanrocha.vercel.app" target="blank">
            Alan Rocha{' '}
          </a>{' '}
          | Site: v1.0.0
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
