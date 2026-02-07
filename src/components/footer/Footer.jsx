import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  const menuItems = [
    { label: "Terms Of Use", path: "/terms-of-service" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "DMCA", path: "/dmca" },
  ];

  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          {menuItems.map((item, index) => (
            <li key={index} className="menuItem">
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="infoText">
          G-movies is your ultimate destination for exploring the world of
          cinema. Discover trending movies, top-rated TV shows, and detailed
          information about your favorite actors and directors. Stay updated
          with the latest releases and explore a vast library of trailers and
          reviews. Join our community of film lovers today and never miss a
          blockbuster again.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
