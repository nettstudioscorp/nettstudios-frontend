import React from "react";
import logo from "../../../../assets/images/logo.jpg";
import "./footer.component.css";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p className="footer-text">
        © Copyright 2015-2024 theNettko Gameplays, News e TI S.A.
      </p>
    </footer>
  );
};

export default FooterComponent;
