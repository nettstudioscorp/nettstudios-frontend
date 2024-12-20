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
            NettStudios, focada no universo dos games e do entretenimento
            digital.{' '}
            {/*Desde 2015, o NettStudios
            produz e compartilha conteúdos de qualidade, incluindo gameplays,
            análises, e dicas voltadas para gamers e entusiastas do setor. Com
            um compromisso de inspirar e engajar sua audiência, o NettStudios se
            destaca como um espaço criativo para apaixonados por jogos. */}
          </p>
          <p className="footer-email">
            Email:{' '}
            <a href="mailto: contatonettplay@gmail.com">nettstudios@mail.com</a>
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
          © Copyright 2015-2024 NettStudios - Games, Entretenimento e Criação
          de Conteúdo.
        </p>
        <a href="/termos-de-uso">Termos de uso</a> &nbsp;
        <span style={{ color: 'white' }}>e</span> &nbsp;
        <a href="/politica-de-privacidade">Política de privacidade</a>
        <p>Site: 0.0.8</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
