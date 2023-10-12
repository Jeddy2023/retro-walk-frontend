import React from 'react'
import "./Nav.css"
import logo from "../images/logo.avif"

function Nav() {
  return (
    <nav>
      <div className="first_nav">
        <div className="first_navchild">
          <p>NGN</p>
          <p>English</p>
        </div>
        <div className="first_navchild">
          <p>
            Free express shipping over $50 & 60 day returns*{" "}
            <a href="">Read more</a>
          </p>
        </div>
        <div className="first_navchild">
          <i class="fa-regular fa-envelope"></i>
          <p>sayhello@demati.com</p>
        </div>
      </div>
      <div className="second_nav">
        <div className="second_navchild">
          <img src={logo} alt="" />
          <p>Home</p>
          <p>Shop</p>
          <p>Product</p>
          <p>Blog</p>
          <p>Featured</p>
        </div>
        <div className="second_navchild">
          <a href="">
            {" "}
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
          <a href="">
            <i class="fa-regular fa-user"></i>
          </a>
          <a href="">
            <i class="fa-regular fa-heart"></i>
          </a>
          <a href="">
            <i class="fa-solid fa-bag-shopping"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;