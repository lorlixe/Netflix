import React from "react";
import "../Style/Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_socials">
          <a href="/" className="footer_social">
            <FacebookIcon />
          </a>
          <a href="/" className="footer_social">
            <InstagramIcon />
          </a>
          <a href="/" className="footer_social">
            <TwitterIcon />
          </a>
          <a href="/" className="footer_social">
            <YouTubeIcon />
          </a>
          <ul className="footer_links">
            <li className="footer_link">
              <a href="/">Lien footer</a>
            </li>
            <li className="footer_link">
              <a href="/">Lien footer</a>
            </li>
            <li className="footer_link">
              <a href="/">Lien footer</a>
            </li>
            <li className="footer_link">
              <a href="/">Lien footer</a>
            </li>
            <li className="footer_link">
              <a href="/">Lien footer</a>
            </li>
            <li className="footer_link">
              <a href="/">Lien footer</a>
            </li>
            <li className="footer_link">
              <a href="/">Lien footer</a>
            </li>
            <li className="footer_link">
              <a href="/">Lien footer</a>
            </li>
          </ul>
          <div className="footer_copy">
            Netflix Clone - tous droits réservés
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
