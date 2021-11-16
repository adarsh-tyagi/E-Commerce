import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import "./Footer.css"

function Footer() {
    return (
      <footer id="footer">
        <div className="leftFooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>Download app for IOS and Android</p>
          <img src={playStore} alt="playstore" />
          <img src={appStore} alt="appstore" />
        </div>
        <div className="midFooter">
          <h1>E-Commerce</h1>
          <p>Copyright 2021 &copy; AdarshTyagi</p>
        </div>
        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a href="https://adarshtyagi.netlify.com/">Portfolio</a>
          <a href="https://github.com/adarsh-tyagi">Github</a>
          <a href="https://www.linkedin.com/in/adarsh-tyagi-6a8abb181/">
            LinkedIn
          </a>
        </div>
      </footer>
    );
}

export default Footer
