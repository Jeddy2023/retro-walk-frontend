import React from 'react';
import './footer.css';
import mater from './first.png';
import apple from './sec.png';
import visa from './3rd.png';
import amex from './4th.png';
import paypal from './5th.png';
import clearPay from './6th.jpg';


function Footer() {
  return (
    <>
        <footer>
          <div className="f_con">
          <div className="f_list">
                <ul className="list">
                    <li>INFORMATION</li>
                    <li>
                        <a href="">Retun Policy</a>
                    </li>
                    <li>
                        <a href="">Start a Return</a>
                    </li>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">Terms and Conditions</a>
                    </li>
                    <li>
                        <a href="">Privacy Policy</a>
                    </li>
                </ul>
                <ul className="list">
                    <li>CATEGOIRES</li>
                    <li>
                        <a href="">Tops </a>
                    </li>
                    <li>
                        <a href=""> Basics</a>
                    </li>
                    <li>
                        <a href="">Shirts & Blouses</a>
                    </li>
                    <li>
                        <a href=""> Pants</a>
                    </li>
                    <li>
                        <a href="">Blazers & Vests </a>
                    </li>
                    <li>
                        <a href="">Shorts </a>
                    </li>
                </ul>
                <ul className="list">
                    <li>SERVICES</li>
                    <li>
                        <a href="">Sale</a>
                    </li>
                    <li>
                        <a href="">Quick Ship </a>
                    </li>
                    <li>
                        <a href="">New Design</a>
                    </li>
                    <li>
                        <a href="">Accidental Fabric Protection</a>
                    </li>
                    <li>
                        <a href=".">Furniture Care</a>
                    </li>
                    <li>
                        <a href=".">Gift Cards</a>
                    </li>
                </ul>
                <div className="email">
                    <h4>JOIN US</h4>
                    <p>New subscribers receive 10% off their first purchase</p>
                    <form action="">
                        <input type="email" name="" required placeholder='Your email' id="" />
                        <button>
                        <i class="fa-regular fa-envelope"></i>
                        </button>
                    </form>
                    <div className="icons">
                        <a href="">
                        <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="">
                        <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="">
                        <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="">
                        <i class="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="pay">
                <div className="p">Copyright © 2023. All Right Reserved</div>
                <ul>
                    <li>
                        <img src={mater} alt="" />
                    </li>
                    <li>
                        <img src={apple} alt="" />
                    </li>
                    <li>
                        <img src={visa} alt="" />
                    </li>
                    <li>
                        <img src={amex} alt="" />
                    </li>
                    <li>
                        <img src={paypal} alt="" />
                    </li>
                    <li>
                        <img src={clearPay} alt="" />
                    </li>
                </ul>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer;