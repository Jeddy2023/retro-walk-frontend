import React from 'react'
import { useState } from 'react';

function Accordion() {
  const [isExpanded, setIsExpanded] = useState([true, false, false]);

  const toggle = (index) => {
    const newExpandedState = isExpanded.map((value, i) => (i === index ? !value : value));
    setIsExpanded(newExpandedState);
  };
  return (
    <div className="accordion">
      <div className="collection" >
        <div className="accordions-title" onClick={() => toggle(0)}>
          <h3>Collection</h3>
          <span
            className={`material-symbols-outlined ${isExpanded[0] ? 'expanded' : ''}`}
            style={{
              transform: `rotate(${isExpanded[0] ? 180 : 0}deg)`,
              transition: "all 0.25s"
            }}
          >
            expand_less
          </span>
        </div>
        {isExpanded[0] && (
          <div className={`accordions-items ${isExpanded[0] ? "open" : "accordions-items"}`}>
            <ul>
              <li>All Products</li>
              <li>Knitwear</li>
              <li>T-shirts</li>
              <li>Sweatshirt</li>
            </ul>
          </div>
        )}
      </div>
      <div className="availability">
        <div className="accordions-title" onClick={() => toggle(1)}>
          <h3>Availability</h3>
          <span
            className={`material-symbols-outlined ${isExpanded[1] ? 'expanded' : ''}`}
            style={{
              transform: `rotate(${isExpanded[1] ? 180 : 0}deg)`,
              transition: "all 0.25s"
            }}
          >
            expand_less
          </span>
        </div>
        {isExpanded[1] && (
          <div className="accordions-items"
            style={{
              maxHeight: isExpanded[1] ? '1000px' : '0',
              overflow: "hidden",
              transition: isExpanded[1] ? "max-height 0.5s ease-in-out" : "max-height 0s ease-in-out"
            }}>
            <ul>
              <li><input type="checkbox" /> In stock</li>
              <li><input type="checkbox" /> Out of stock </li>
            </ul>
          </div>
        )}
      </div>
      <div className="brand">
        <div className="accordions-title" onClick={() => toggle(2)}>
          <h3>Brand</h3>
          <span
            className={`material-symbols-outlined ${isExpanded[2] ? 'expanded' : ''}`}
            style={{
              transform: `rotate(${isExpanded[2] ? 180 : 0}deg)`,
              transition: "all 0.25s"
            }}
          >
            expand_less
          </span>
        </div>
        {isExpanded[2] && (
          <div className="accordions-items"
            style={{
              maxHeight: isExpanded[2] ? '1000px' : '0',
              overflow: "hidden",
              transition: isExpanded[2] ? "max-height 0.5s ease-in-out" : "max-height 0s ease-in-out"
            }}>
            <ul>
              <li><input type="checkbox" /> Akatsuki Store</li>
              <li><input type="checkbox" /> Akaza Store</li>
              <li><input type="checkbox" /> Eva Store</li>
              <li><input type="checkbox" /> Lulu Store</li>
              <li><input type="checkbox" /> SE Store </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Accordion