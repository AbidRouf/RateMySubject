import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="Footer">
      <div className="footer__container">
        <div className="row row__column">
          <div className="footer__list">

            <a href="/">
              <a className="footer__link">Home</a>
            </a>

            <a href="#">
              <a className="footer__link">About Us</a>
            </a>

          </div>
          <div className="footer__copyright">Copyright &copy; 2021 RateMySubject</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
