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

  const socialLinks = [
    {
      icon: FaFacebookF,
      label: "Follow us on Facebook",
      url: "https://facebook.com",
    },
    {
      icon: FaInstagram,
      label: "Follow us on Instagram",
      url: "https://instagram.com",
    },
    {
      icon: FaTwitter,
      label: "Follow us on Twitter",
      url: "https://twitter.com",
    },
    {
      icon: FaLinkedin,
      label: "Connect on LinkedIn",
      url: "https://linkedin.com",
    },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <ContentWrapper>
        <nav aria-label="Footer navigation">
          <ul className="menuItems">
            {menuItems.map((item, index) => (
              <li key={index} className="menuItem">
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="infoText">
          G-movies is your ultimate destination for exploring the world of
          cinema. Discover trending movies, top-rated TV shows, and detailed
          information about your favorite actors and directors. Stay updated
          with the latest releases and explore a vast library of trailers and
          reviews. Join our community of film lovers today and never miss a
          blockbuster again.
        </div>
        <div
          className="socialIcons"
          role="list"
          aria-label="Social media links"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="icon"
              aria-label={social.label}
              title={social.label}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
            >
              <social.icon aria-hidden="true" />
              <span className="visually-hidden">{social.label}</span>
            </a>
          ))}
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
