import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logfot.png";
import fb from "../img/social/fb.svg";
import ig from "../img/social/ig.svg";
import tik from "../img/social/tik.svg";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
];

const secondaryLinks = [
  { label: "Artikel", to: "/blog" },
  { label: "Contact", to: "/contact" },
  { label: "Admin", href: "/admin/" },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", src: fb },
  { name: "TikTok", href: "https://tiktok.com", src: tik },
  { name: "Instagram", href: "https://instagram.com", src: ig },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="PT.xyz" />
        </div>

        <div className="footer-nav">
          <div className="footer-column">
            <h4>Menu</h4>
            <ul>
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>More</h4>
            <ul>
              {secondaryLinks.map((item) =>
                item.href ? (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 PT.xyz. All rights reserved.</p>
          <div className="social-links" aria-label="Social media">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                title={item.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                <img src={item.src} alt={item.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
