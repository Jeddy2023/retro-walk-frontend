import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer_parent">
        <div className="footer_child">
          <h1>INFORMATIONS</h1>
          <p>Return Policy</p>
          <p>Start a Return</p>
          <p>FAQ</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="footer_parent">
        <div className="footer_child">
          <h1>CATEGORIES</h1>
          <p>Tops</p>
          <p>Basics</p>
          <p>Shirts & Blouces</p>
          <p>Pants</p>
          <p>Blazers & Vest</p>
          <p>Shorts</p>
        </div>
      </div>
      <div className="footer_parent">
        <div className="footer_child">
          <h1>SERVICES</h1>
          <p>Sale</p>
          <p>Quick Ship</p>
          <p>New Designs</p>
          <p>Accidental Fabric Protection</p>
          <p>Furniture care</p>
          <p>Gift Cards</p>
        </div>
      </div>

      <div className="footer_parent">
        <div className="footer_child">
          <h1>JOIN US</h1>
          <div className="footer_box">
            <p>New subscribers receive 10% off their first purchase</p>
          </div>
          <div className="footer_midbox">
            <div className="footer_midfirstbox">
              <p>Your email</p>
            </div>
            <div className="footer_midsecondbox">
              <i class="fa-regular fa-envelope"></i>
            </div>
          </div>

          <div className="footer_lastbox">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
