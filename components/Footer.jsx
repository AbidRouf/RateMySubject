import React from "react";
import Link from "next/link";

const Footer = ({ toggleModal }) => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">

          <div className="footer__list">
            <Link href="/" className="footer__link">
              Home
            </Link>
            <Link href="#" className="footer__link">
              About Us
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2021 RateMySubject</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
