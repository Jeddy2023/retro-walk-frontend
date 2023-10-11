import React from 'react'
import { useState } from 'react';
import Priceslider from './Priceslider'

function Accordion({ selectedBrands, setSelectedBrands, selectedPriceRange, setSelectedPriceRange, selectedCollection, handleCollectionFilter }) {

  const [isExpanded, setIsExpanded] = useState([true, true, true, true]);

  const toggle = (index) => {
    const newExpandedState = isExpanded.map((value, i) => (i === index ? !value : value));
    setIsExpanded(newExpandedState);
  };

  const handleBrandCheckboxClick = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <div className="accordion">
      <div className="collection" >
        <div className="accordions-title" onClick={() => toggle(0)}>
          <h3>COLLECTIONS</h3>
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
          <div className={`accordions-items ${isExpanded[0] ? "accordions-items-open" : "accordions-items"}`} >
            <ul>
              <li 
              onClick={() => handleCollectionFilter('')}

              >
                All Products </li>
              <li  onClick={() => handleCollectionFilter('Knitwear')}>Knitwear</li>
              <li onClick={() => handleCollectionFilter('T-shirts')}>T-shirts</li>
              <li onClick={() => handleCollectionFilter('Sweatshirt')}>Sweatshirt</li>

            </ul>
          </div>
        )}
      </div>
      <div className="availability">
        <div className="accordions-title" onClick={() => toggle(1)}>
          <h3>AVAILABILITY</h3>
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
          <div className={`accordions-items ${isExpanded[1] ? "accordions-items-open" : "accordions-items"}`}>
            <ul>
              <li>
                <div className="customcheckbox">
                  <input type="checkbox" />
                </div>
                In stock
              </li>
              <li>
                <div className="customcheckbox">
                  <input type="checkbox" />
                </div>
                Out of stock
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="brand">
        <div className="accordions-title" onClick={() => toggle(2)}>
          <h3>BRANDS</h3>
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
          <div className={`accordions-items ${isExpanded[2] ? "accordions-items-open" : "accordions-items"}`}>
            <ul>
              <li>
                <div className="customcheckbox">
                  <input
                    type="checkbox"
                    onClick={() => handleBrandCheckboxClick('Akatsuki')}
                    checked={selectedBrands.includes('Akatsuki')}
                  />
                </div>
                Akatsuki Store

              </li>
              <li>
                <div className="customcheckbox">
                  <input
                    type="checkbox"
                    onClick={() => handleBrandCheckboxClick('Akaza')}
                    checked={selectedBrands.includes('Akaza')}
                  />
                </div>
                Akaza Store
              </li>
              <li>
                <div className="customcheckbox">
                  <input
                    type="checkbox"
                    onClick={() => handleBrandCheckboxClick('Eva')}
                    checked={selectedBrands.includes('Eva')} />
                </div>
                Eva Store
              </li>
              <li>
                <div className="customcheckbox">
                  <input type="checkbox"
                    onClick={() => handleBrandCheckboxClick('Lulu')}
                    checked={selectedBrands.includes('Lulu')} />
                </div>
                Lulu Store
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="price">
        <div className="accordions-title" onClick={() => toggle(3)}>
          <h3>Price</h3>
          <span
            className={`material-symbols-outlined ${isExpanded[3] ? 'expanded' : ''}`}
            style={{
              transform: `rotate(${isExpanded[3] ? 180 : 0}deg)`,
              transition: "all 0.25s"
            }}
          >
            expand_less
          </span>
        </div>
        {isExpanded[3] && (
          <div className={`accordions-items ${isExpanded[3] ? "accordions-items-open" : "accordions-items"}`}>
            <Priceslider selectedPriceRange={selectedPriceRange} setSelectedPriceRange={setSelectedPriceRange} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Accordion