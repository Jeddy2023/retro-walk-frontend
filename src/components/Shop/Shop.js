import React, { useState, useEffect, useRef } from 'react';
import './shop.css';
import Accordion from './Accordion';
import '../Home/trend.css';
import Products from './Products';
import { trend } from '../Home/trendArr';

function Shop() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([10, 90]);
  const [selectedCollection, setSelectedCollection] = useState('');
  const [selectedGridStyle, setSelectedGridStyle] = useState('grid-3');
  const [selectedSortOption, setSelectedSortOption] = useState('title-ascending');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filtersApplied, setFiltersApplied] = useState(false); // State to track if any filter is applied


  const filterProducts = () => {
    const filtered = trend.filter((curElem) => {
      const brandMatch =
        selectedBrands.length === 0 || selectedBrands.includes(curElem.brand);
      const priceMatch =
        selectedPriceRange[0] <= curElem.price && curElem.price <= selectedPriceRange[1];
      const collectionMatch =
        selectedCollection === '' || curElem.collection === selectedCollection;

      return brandMatch && priceMatch && collectionMatch;
    });

    return filtered.sort((a, b) => {
      if (selectedSortOption === 'title-ascending') {
        return a.name.localeCompare(b.name);
      } else if (selectedSortOption === 'title-descending') {
        return b.name.localeCompare(a.name);
      } else if (selectedSortOption === 'price-ascending') {
        return a.price - b.price;
      } else if (selectedSortOption === 'price-descending') {
        return b.price - a.price;
      }
    });
  };

  useEffect(() => {
    const updatedFilteredProducts = filterProducts();
    setFilteredProducts(updatedFilteredProducts);
  }, [selectedBrands, selectedPriceRange, selectedCollection, selectedSortOption]);

  const handleCollectionFilter = (collection) => {
    setSelectedCollection(collection);
  };

  const handleGridStyleChange = (style) => {
    setSelectedGridStyle(style);
  };

  const handleSortOptionChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  const handlePriceRangeChange = (newValue) => {
    setSelectedPriceRange(newValue);
  };

  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSelectedPriceRange([10, 90]);
    setSelectedCollection('');
    setSelectedSortOption('title-ascending');
    setFiltersApplied(false);

  };
  return (
    <main className='main-productcontent'>
      <div className="productcontentTop">
        <h1>Products</h1>
        <div className="breadcrumbs">
          Home > <span>Product</span>
        </div>
      </div>
      <div className="productcontentBottom">
        <section className="pcBcontent">
          <aside className="collection-sidebar">
            <Accordion
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              selectedCollection={selectedCollection}
              handleCollectionFilter={handleCollectionFilter}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={handlePriceRangeChange} />
          </aside>
          <div className="collection-content">
            <div className="cc-Top">
              <div className="cc-Top-select">
                <select
                  value={selectedSortOption}
                  onChange={handleSortOptionChange}>
                  <option value="title-ascending" selected>Alphabetically, A-Z</option>
                  <option value="title-descending">Alphabetically, Z-A</option>
                  <option value="price-ascending">Price, Low-High</option>
                  <option value="price-descending">Price, High-Low</option>
                </select>
              </div>
              <div className="grid-switches">
                <div
                  className={`grid-switch ${selectedGridStyle === 'grid-2' ? 'active' : ''}`}
                  onClick={() => handleGridStyleChange('grid-2')}
                >
                  <span></span>
                  <span></span>
                </div>
                <div
                  className={`grid-switch ${selectedGridStyle === 'grid-3' ? 'active' : ''}`}
                  onClick={() => handleGridStyleChange('grid-3')}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div
                  // className="grid-switch gs4"
                  className={`grid-switch ${selectedGridStyle === 'grid-4' ? 'active' : ''}`}
                  onClick={() => handleGridStyleChange('grid-4')}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="cc-Main">
              {
                (selectedBrands.length > 0 ||
                  (selectedPriceRange[0] !== 10 || selectedPriceRange[1] !== 90) ||
                  selectedCollection !== '' ||
                  selectedSortOption !== 'title-ascending') && (
                  <div className="clear-filters-button">
                    <button onClick={handleClearFilters}>Clear Filters</button>
                  </div>
                )
              }
              <div
                className={`product-grid ${selectedGridStyle}`}
              >
                <Products
                  filteredProducts={filteredProducts}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main >
  );
}

export default Shop;