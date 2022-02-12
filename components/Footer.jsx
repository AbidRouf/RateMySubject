import React from "react";

const Footer = ({ toggleModal }) => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">

          <div className="footer__list">
            <a href="/" className="footer__link">
              Home
            </a>
            <a href="#" className="footer__link">
              About Us
            </a>
          </div>
          <div className="footer__copyright">Copyright &copy; 2021 RateMySubject</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
