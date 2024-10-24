import React from "react";
import logo from "../../../../assets/images/logo.jpg";
import "../footer/Footer.css";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-description">
            theNettko, é um website que não apenas continua oferecendo conteúdo
            de jogos, mas também se tornou um hub de informações sobre
            programação, tecnologia e outras áreas relacionadas ao mundo
            digital.
          </p>
          <p className="footer-email">
            Email:{" "}
            <a href="mailto: contatonettplay@gmail.com">
              contatonettko@mail.com
            </a>
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

          {/* TODO: <div className="footer-app">
            <a href="#" className="footer-app-button">
              Baixe aqui!
            </a>
          </div> */}
        </div>
      </div>
      <br />
      <div className="footer-bottom">
        {/* TODO: <a href="#">Termos de uso e Política de privacidade</a> */}
        <p>Copyright © theNettko 2024 All Rights Reserved</p>
        <p>Site: 0.1.0</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
