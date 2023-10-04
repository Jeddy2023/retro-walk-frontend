import './shop.css';
import Accordion from './Accordion';

function Shop() {
  return (
    <main className='main-productcontent'>
      <div className="productcontentTop">
        <h1>Products</h1>
        <div className="breadcrumbs"> Home  <span>Products</span> </div>
      </div>
      <div className="productcontentBottom">
        <section className="pcBcontent">
          <aside className="collection-sidebar">
            <Accordion />
          </aside>
          <div className="collection-content">
            <div className="cc-Top">
              <div className="select">
                <select name="" id="">
                  <option value="manual">Featured</option>
                  <option value="best-selling">Best selling</option>
                  <option value="title-ascending">Alphabetically, A-Z</option>
                  <option value="title-descending">Alphabetically, Z-A</option>
                  <option value="price-ascending">Price, Low-High</option>
                  <option value="price-descending">Price, High-Low</option>
                </select>
              </div>
              <div className="grid-switches"></div>
            </div>
            <div className="cc-Main">
              <h1>Yes</h1>
              <div className="product-grid"></div>
            </div>
          </div>
        </section>
      </div>
    </main >
  );
}

export default Shop;